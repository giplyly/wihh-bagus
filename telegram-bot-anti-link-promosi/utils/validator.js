const { config } = require('../config');

/**
 * Cek apakah teks mengandung link
 * @param {string} msgText
 * @returns {boolean}
 */
function isLink(msgText) {
  if (!msgText) return false;
  const urlRegex = /https?:\/\/[^\s]+/i;
  return urlRegex.test(msgText);
}

/**
 * Cek apakah teks mengandung kata kunci promosi
 * @param {string} msgText
 * @returns {boolean}
 */
function isPromosi(msgText) {
  if (!msgText) return false;
  const lower = msgText.toLowerCase();
  return config.promoKeywords.some((keyword) => lower.includes(keyword.toLowerCase()));
}

/**
 * Cek apakah user adalah bot
 * @param {Object} user
 * @returns {boolean}
 */
function isBotUser(user) {
  return user && user.is_bot === true;
}

module.exports = {
  isLink,
  isPromosi,
  isBotUser,
};
