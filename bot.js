const TelegramBot = require("node-telegram-bot-api");

// 
const TOKEN = 8753523985:"AAG_stDg7lTNywPQgStURpidgrD_Hm684BU";

const bot = new TelegramBot(TOKEN, { polling: true });

console.log("Lumora AI Bot started!");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 Welcome to Lumora AI!\n\nThe bot is running successfully."
  );
});
