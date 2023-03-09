import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on(/\/start/, (msg) => {
    bot.sendSticker(
      msg?.chat?.id,
      "CAACAgQAAxkBAANWY2QEPlzq3vim0i9HELYo0hRrhwkAAhUDAAIv2CUOAnTLZ07ySQMqBA"
    );
    bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}`, );
  });

bot.on("text", async (msg) => {

    if (
        msg?.chat?.id == "-1001859543798" ||
        msg?.sender_chat?.type == "channel"
    ) {
        return;
    }
    if (msg?.entities[0]?.type != "url") {
        bot.sendMessage(msg.from.id, `This is not url`)

        return;
    }
    const url = msg.text;
    bot.sendMessage(msg.from.id, `your url: ${url}`)
});


export default bot
