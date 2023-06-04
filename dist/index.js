import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import dotenv from 'dotenv';
import { DATA_BASE } from './Data/messMenu.js';
import { weekDay } from './Utils/DayTime.js';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN || 'noKey');
bot.on(message('text'), async (ctx) => {
    const selected_time = ctx.update.message.text;
    const food = (await DATA_BASE[weekDay][selected_time]) || 'Please Select the Options from List';
    await ctx.reply(food);
    // await ctx.reply((ctx.chat.id).toString()) ;
    // Testing .. 
    await ctx.replyWithPhoto('https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
    // ctx.telegram.getChat() ;
});
bot.on('callback_query', async (ctx) => {
    // Using context shortcut
    await ctx.answerCbQuery("Yo....");
});
bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
