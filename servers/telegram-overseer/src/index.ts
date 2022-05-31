
import { config as dotenvConfig } from 'dotenv'
import { Telegraf } from 'telegraf'

dotenvConfig();



function Main()
{
    if(!process.env.OVERSEER)
    {
        return;
    }
    const OVERSEER_TOKEN:string = process.env.OVERSEER;
    const bot = new Telegraf(OVERSEER_TOKEN)
    bot.start((ctx) => ctx.reply('Welcome'))
    // bot.help((ctx) => ctx.reply('Send me a sticker'))
    // bot.on('sticker', (ctx) => ctx.reply('👍'))
    // bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    bot.launch()

    // // Enable graceful stop
    // process.once('SIGINT', () => bot.stop('SIGINT'))
    // process.once('SIGTERM', () => bot.stop('SIGTERM'))
}


Main();
