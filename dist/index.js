import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import dotenv from 'dotenv';
import { DATA_BASE } from './Data/messMenu.js';
import { weekDay } from './Utils/DayTime.js';
import { Keyboard } from 'telegram-keyboard';
import { getMenuOption } from './Utils/OptionsDecoder.js';
import { greetMember } from './Messages/startGreet.js';
import { getRandomEmoji } from './Messages/EmojiGenerator.js';
import { decorateFoodOutput } from './Messages/Deorator.js';
import { OACHandler } from './Messages/OACHandler.js';
import { foodCourtHanlder } from './Messages/foodCourthanlder.js';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN || 'noKey');
const keyboard = Keyboard.make([['Breakfast', 'Lunch', 'Snacks', 'Dinner']])
    .oneTime(false)
    .resize();
async function footerMessage(ctx) {
    await ctx.reply(getRandomEmoji());
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
//!!!!!!!!!!!!!! Add more generic .... add options to find intent of the user .. 
// Add Natural Language Proccessing to it .... 
bot.hears(/Breakfast|Lunch|Snacks|Dinner/, async (ctx) => {
    const selected_time = ctx.update.message.text;
    let food = DATA_BASE[weekDay][selected_time];
    food = decorateFoodOutput(food);
    await ctx.reply(food);
    footerMessage(ctx);
});
bot.hears(/OAC|FoodCourt/, async (ctx) => {
    const item = ctx.update.message.text;
    if (item === 'OAC') {
        await OACHandler(ctx);
    }
    else if (item === 'FoodCourt') {
        await foodCourtHanlder(ctx);
    }
    footerMessage(ctx);
});
// for all the generic pourous message... 
// Only use this for menu handling .... 
// Menue Conntent ... [ Whata's now in mess  , OAC Menue , Foood Court Menue .... ] 
// for what's now ... show the keyboard .. // Process the time slot ..and reply acordingly [ Find Now Slot ] .. 
bot.on(message('text'), async (ctx) => {
    const menu_option = ctx.update.message.text;
    const selected_time = getMenuOption(menu_option);
    // If the user has selected a valid option
    if (selected_time) {
        const food = DATA_BASE[weekDay][selected_time];
        await ctx.reply(food);
    }
    else {
        ctx.reply('please select from given options');
    }
    // If the user has not selected an option yet, send the available options
    // await ctx.reply('Please Select the Time', keyboard.inline());
    footerMessage(ctx);
});
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
