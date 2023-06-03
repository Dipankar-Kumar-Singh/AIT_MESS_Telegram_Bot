import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import dotenv from 'dotenv';
import { Keyboard } from 'telegram-keyboard';

/////////////////////////////////////////////////////////

import { weekDay } from './Utils/DayTime.js';
import { DATA_BASE } from './Data/messMenu.js';

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on(message('text'), async (ctx) => {
	const selected_time = ctx.update.message.text;

	if (selected_time == 'ok') {
		const keyboard = Keyboard.make([
			['Button 1', 'Button 2'], // First row
			['Button 3', 'Button 4'], // Second row
		]);

		// await ctx.reply('Simple built-in keyboard', keyboard.reply());
		return await ctx.reply('Simple inline keyboard', keyboard.inline());
	}

	const food =
		(await DATA_BASE[weekDay][selected_time]) ||
		'Please Select the Options from List';
	await ctx.reply(food);
});

bot.on('callback_query', async (ctx) => {
	// Explicit usage
	console.log(ctx);
	await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);
	// Using context shortcut
	await ctx.answerCbQuery('Recived');
});

bot.on('inline_query', async (ctx) => {
	const result = [];
	// Explicit usage
	await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);
	// Using context shortcut
	await ctx.answerInlineQuery(result);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

//
