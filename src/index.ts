import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import dotenv from 'dotenv';
import { DATA_BASE } from './Data/messMenu.js';
import { weekDay } from './Utils/DayTime.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN || 'noKey');

bot.on(message('text'), async (ctx) => {

	const selected_time: string = ctx.update.message.text;
	const food = (await DATA_BASE[weekDay][selected_time]) ||	'Please Select the Options from List';
	await ctx.reply(food);
});

bot.on('callback_query', async (ctx) => {
	// Using context shortcut
	await ctx.answerCbQuery('Yo....');
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
export {};
