import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import dotenv from 'dotenv';

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('quit', async (ctx) => {
	// Explicit usage
	await ctx.telegram.leaveChat(ctx.message.chat.id);

	// Using context shortcut
	await ctx.leaveChat();
});

const DATA_BASE = {
	Monday: {
		'/morning': 'Pav Bhaji + Tea🍵',
		'/afternoon':
			'Baingan Bharta , Dal-Fry, Plain-Rice, Curd, Salad, Chapati and Fruits',
		'/evening': 'Poha',
		'/night': 'Chicken',
	},
	Tuesday: {
		'/morning': 'Samosa',
		'/afternoon': 'Puri',
		'/evening': 'Poha',
		'/night': 'Chicken',
	},
	Wednesday: {
		'/morning': 'Samosa',
		'/afternoon': 'Puri',
		'/evening': 'Poha',
		'/night': 'Chicken',
	},
	Thursday: {
		'/morning': 'Samosa',
		'/afternoon': 'Puri',
		'/evening': 'Poha',
		'/night': 'Chicken',
	},
	Friday: {
		'/morning': 'Samosa',
		'/afternoon': 'Puri',
		'/evening': 'Poha',
		'/night': 'Chicken',
	},
	Saturday: {
		'/morning': 'Samosa',
		'/afternoon': 'Puri',
		'/evening': 'Poha',
		'/night': 'Chicken',
	},
	Sunday: {
		'/morning': 'Samosa',
		'/afternoon': 'Puri',
		'/evening': 'Poha',
		'/night': 'Chicken',
	},
};

bot.on(message('text'), async (ctx) => {
	// Explicit usage
	// await ctx.telegram.sendMessage(
	// 	ctx.message.chat.id,
	// 	`Hello1 ${ctx.state.role}`
	// );

	const selected_time = ctx.update.message.text;

	console.dir(selected_time);

	const HourTime = Number(
		Intl.DateTimeFormat('en', {
			hour: 'numeric',
			hour12: false,
		}).format(new Date())
	);

	const weekDay = Intl.DateTimeFormat(Intl.Locale.current, {
		weekday: 'long',
	}).format(new Date());

	if (selected_time === '/morning') {
		const food = (await DATA_BASE[weekDay][selected_time]) || 'ok';
		console.log(DATA_BASE[weekDay][selected_time]);
		console.log(DATA_BASE[weekDay]);

		await ctx.reply(food);
		return;
	}

	// Using context shortcut
	// await ctx.reply(`HIMANSHU .. YO  , ${ctx.state.role}`);
});

bot.on('callback_query', async (ctx) => {
	// Explicit usage
	await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

	// Using context shortcut
	await ctx.answerCbQuery();
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
