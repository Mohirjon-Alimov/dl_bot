import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on('text', msg => msg.reply.text(msg.text))
bot.on("/start", (msg) => {
    console.log(msg);
    const chat_id = msg.from.id;
    bot.sendMessage(
        chat_id,
        `Привет ${msg.from.first_name}! Я бот для скачивания видео из TikTok. Просто отправь мне ссылку на видео.`
    );
});

export default bot
