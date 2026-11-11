const { isLink, isPromosi, isBotUser } = require('../utils/validator');

/**
 * Handle incoming text messages: delete if contains link, promotion, or sent by a bot.
 * @param {Telegraf} bot - Instance of Telegraf bot.
 * @param {Context} ctx - Telegram context object.
 */
async function handleMessage(bot, ctx) {
  try {
    const message = ctx.message;
    if (!message) return;

    const chatId = message.chat?.id;
    const messageId = message.message_id;
    if (!chatId || !messageId) return;

    const text = message.text || '';
    const from = ctx.from || {};

    const containsLink = isLink(text);
    const containsPromosi = isPromosi(text);
    const fromBot = isBotUser(from);

    if (containsLink || containsPromosi || fromBot) {
      // Use the correct Telegraf API to delete a message
      await bot.telegram.deleteMessage(chatId, messageId);
      console.log(
        `Deleted message ${messageId} from chat ${chatId} ` +
          `(link: ${containsLink}, promosi: ${containsPromosi}, bot: ${fromBot})`
      );
    }
  } catch (err) {
    console.error('Error in handleMessage:', err);
    throw err;
  }
}

module.exports = { handleMessage };
