import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { DATA_BASE } from './Data/messMenu.js';
import { weekDay } from './Utils/DayTime.js';
import { Keyboard } from 'telegram-keyboard';
import { greetMember } from './Messages/startGreet.js';
import { decorateFoodOutput } from './Messages/Deorator.js';
import { OACHandler } from './Messages/OACHandler.js';
import { foodCourtHanlder } from './Messages/foodCourthanlder.js';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN || 'noKey');
const keyboard = Keyboard.make([['Breakfast', 'Lunch', 'Snacks', 'Dinner']])
    .oneTime(false)
    .resize();
async function footerMessage(ctx) {
    // await ctx.reply(getRandomEmoji()) ;
    await ctx.reply('For more options : ↙️ Click ≡ Menu Button');
    await ctx.reply('Anything else you want to know ? ', keyboard.inline());
}
bot.start(async (ctx) => {
    await greetMember(ctx);
    await ctx.reply('Select Option', keyboard.inline());
    await ctx.reply('You can Also select Option from Keyboard At Bottom', keyboard.reply());
});
// The bot will respond to the user input with the appropriate meal by using the hears() method.
// Main hanlder .. 
//!!!!!!!!!!!!!!TODO :  Add more generic .... add options to find intent of the user .. 
// Add Natural Language Proccessing to it .... 
bot.hears(/Breakfast|Lunch|Snacks|Dinner/, async (ctx) => {
    const selected_time = ctx.update.message.text;
    let food = DATA_BASE[weekDay][selected_time];
    food = decorateFoodOutput(food);
    await ctx.reply(food);
    footerMessage(ctx);
});
bot.command('mess', async (ctx) => {
    await ctx.reply("Select the Time ", keyboard.reply());
});
bot.command('oac', async (ctx) => {
    await OACHandler(ctx);
    footerMessage(ctx);
});
bot.command('foodcourt', async (ctx) => {
    await foodCourtHanlder(ctx);
    footerMessage(ctx);
});
// for all the generic pourous message... 
// Only use this for menu handling .... 
// Menue Conntent ... [ Whata's now in mess  , OAC Menue , Foood Court Menue .... ] 
// for what's now ... show the keyboard .. // Process the time slot ..and reply acordingly [ Find Now Slot ] .. 
// bot.on(message('text'), async (ctx) => {
// 	// const user_intent = intent(ctx.update.message.text) ;
// 	const txt = ctx.update.message.text ;
// 	const selected_time: string | undefined = getMenuOption(txt);
// 	// If the user has selected a valid option
// 	if (selected_time) {
// 		const food = DATA_BASE[weekDay][selected_time];
// 		await ctx.reply(food);
// 	} else {
// 		ctx.reply('please select from given options')
// 	}
// 	footerMessage(ctx) ;
// });
bot.on('callback_query', async (ctx) => {
    let selected_time = ctx.update.callback_query.data;
    if (selected_time) {
        const food = DATA_BASE[weekDay][selected_time];
        await ctx.answerCbQuery(`🙃 Enjoy your ${selected_time}`);
        ctx.reply(food);
        footerMessage(ctx);
    }
});
bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
