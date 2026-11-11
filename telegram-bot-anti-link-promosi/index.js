const { Telegraf } = require('telegraf');
const { config } = require('./config');
const { handleMessage } = require('./handlers/messageHandler');

// Cek token placeholder
if (!config.token || config.token.includes('YOUR') || config.token.includes('TOKEN')) {
  console.error('❌ Token belum diisi. Silakan set config.token di config.js');
  process.exit(1);
}

const bot = new Telegraf(config.token);

// Event handler untuk pesan teks
bot.on('text', async (ctx) => {
  try {
    await handleMessage(bot, ctx);
  } catch (err) {
    console.error('Error di handleMessage:', err);
  }
});

// Tangani error bot
bot.catch((err, ctx) => {
  console.error(`❌ Error di ${ctx.updateType}: ${err.message}`);
});

// Jalankan bot
bot.launch().then(() => {
  console.log('✅ Bot berjalan. Tekan Ctrl+C untuk berhenti.');
});

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
