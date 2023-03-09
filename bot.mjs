import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on("/start", (msg) => {
    const chat_id = msg.from.id;
    bot.sendMessage(
        chat_id,
        `Привет ${msg.from.first_name}! Я бот для скачивания видео из TikTok. Просто отправь мне ссылку на видео.`
    );
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
