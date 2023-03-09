import TeleBot from "telebot"
import dotenv from "dotenv";
import ttdl from "tiktok-video-downloader";
let date = new Date();
dotenv.config();

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on(/\/start/, (msg) => {
    bot.sendSticker(
      msg?.chat?.id,
      "CAACAgQAAxkBAANWY2QEPlzq3vim0i9HELYo0hRrhwkAAhUDAAIv2CUOAnTLZ07ySQMqBA"
    );
    bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}` );
    return
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
    if (url.startsWith("https://vt.tiktok.com/")) {
        bot.sendMessage(msg.from.id, 'Soon')
        try {
          ttdl.getInfo(url).then(async (result) => {
            await bot.sendVideo("-1001859543798", result.video.url.no_wm, {
              caption: `link: ${url}\nname: ${msg.from.first_name}\nusername: @${
                msg.from.username
              }\n${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} `,
            });
    
            await bot.sendVideo(msg.from.id, result.video.url.no_wm, {
              caption: "Downloaded with @tt_dl_free_hosting_bot",
            });
          });
          return;
        } catch (err) {
          console.log(err);
          msg.reply.text("Ошибка при загрузке видео.");
          return;
        }
        return;
      } else {
        msg.reply.text("Это не ссылка на видео TikTok.");
        return;
      }
});


export default bot
