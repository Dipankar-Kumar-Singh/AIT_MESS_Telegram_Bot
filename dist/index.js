import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import dotenv from 'dotenv';
import { DATA_BASE } from './Data/messMenu.js';
import { updateDateTime, updateTimeNow, weekDay } from './Utils/DayTime.js';
import { Keyboard } from 'telegram-keyboard';
import { greetMember } from './Messages/startGreet.js';
import { decorateFoodOutput } from './Messages/Deorator.js';
import { OACHandler } from './Utils/Handlers/OACHandler.js';
import { foodCourtHanlder } from './Utils/Handlers/foodCourtHandler.js';
import { intent } from './Utils/IntentDetector.js';
import { intentHanlder } from './Utils/Handlers/intentHandler.js';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN || 'noKey');
const keyboard = Keyboard.make([['Breakfast', 'Lunch', 'Snacks', 'Dinner']])
    .oneTime(false)
    .resize();
async function footerMessage(ctx) {
    await ctx.reply('For more options : ↙️ Click ≡ Menu Button');
    await ctx.reply('Anything else you want to know ? ', keyboard.inline());
}
bot.start(async (ctx) => {
    await greetMember(ctx);
    await ctx.reply('Select Option', keyboard.inline());
    await ctx.reply('You can Also select Option from Keyboard At Bottom', keyboard.reply());
});
bot.hears(/Breakfast|Lunch|Snacks|Dinner/, async (ctx) => {
    const dateTimeofClinet = ctx.update.message.date;
    updateDateTime(dateTimeofClinet);
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
bot.on(message('text'), async (ctx) => {
    const user_intent = intent(ctx.update.message.text);
    // resposiblity of handler ==> take out the context's text and then print the apporpriate message 
    if (user_intent) {
        const hanlder = await intentHanlder(user_intent);
        hanlder(ctx);
    }
    else {
        ctx.reply('please select from given options');
    }
    footerMessage(ctx);
});
bot.on('callback_query', async (ctx) => {
    updateTimeNow();
    let selected_time = ctx.update.callback_query.data;
    if (selected_time) {
        let food = DATA_BASE[weekDay][selected_time];
        food = decorateFoodOutput(food);
        await ctx.answerCbQuery(`🙃 Enjoy your ${selected_time}`);
        ctx.reply(food);
        footerMessage(ctx);
    }
});
bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
