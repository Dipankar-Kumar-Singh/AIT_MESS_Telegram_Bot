import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import dotenv from 'dotenv';

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN || "noKey");

bot.command('quit', async (ctx) => {
	// Explicit usage
	await ctx.telegram.leaveChat(ctx.message.chat.id);
	// Using context shortcut
	await ctx.leaveChat();
});

const DATA_BASE = {
	Monday: {
		'/morning': 'Pav Bhaji + Tea🍵',
		'/afternoon': '🍆 Baingan-Bharta, 🐄 Curd',
		'/evening': 'Masala-Pav 🍔 +  Tea 🍵',
		'/night': 'Matar-Panner, Papad, Rice-kher  ',
	},
	Tuesday: {
		'/morning': `Poha / Black Chana/ Dalia , Coffee ☕`,
		'/afternoon': `Rajma-Masala , Crud`,
		'/evening': `Samosa + Tea🍵`,
		'/night': `Puri/Chapati  , Custard🍮`,
	},
	Wednesday: {
		'/morning': `Idli + ( Sambhar / Coconut Chutney )[ Alt  ] `,
		'/afternoon': `Veg Biryani, Papad , Raita`,
		'/evening': `Vada Pav, Tea`,
		'/night': `Chicken`,
	},
	Thursday: {
		'/morning': `Puri Bhaji + Tea🍵`,
		'/afternoon': `Rajma-masala + Curd`,
		'/evening':`'Poha , Coffee`,
		'/night': `Aloo Gobhi / Kofta Curry`,
	},
	Friday: {
		'/morning': `Bread Butter - Veg Cutlet / Boiled Egg + Tea🍵`,
		'/afternoon': `ALoo Matar, Curd`,
		'/evening': `Bread Pakoda + Tea🍵`,
		'/night': `[ 🍽️ Paid 💰 ] -- Loki / Soyabean Sabzi`,
	},
	Saturday: {
		'/morning': `Aloo Paratha , Curd + Tea🍵`,
		'/afternoon': `Chole Bhatoore / Jeera Rice, Boondi Raita`,
		'/evening': `Bhel + Coffe☕`,
		'/night': `Soyabeen`,
	},
	Sunday: {
		'/morning': `Onion-Tomato Uttapam 🔥 + Sambhar + Tea🍵`,
		'/afternoon': `Chana Masala , Jeera rice`,
		'/evening': `Cream Roll + Tea🍵`,
		'/night': `[ 🍽️ Paid 💰 ] -- Aloo Palak , Mix dal`,
	},
};

bot.on(message('text'), async (ctx) => {

	const selected_time = ctx.update.message.text;

	const weekDay = Intl.DateTimeFormat(Intl.Locale.current, {
		weekday: 'long',
	}).format(new Date());

	const food = (await DATA_BASE[weekDay][selected_time]) || 'Please Select the Options from List';
	await ctx.reply(food) ;

});

bot.on('callback_query', async (ctx) => {
	// Explicit usage
	await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

	// Using context shortcut
	await ctx.answerCbQuery();
});



bot.start(bot.reply('Started'))
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));



export{} ;