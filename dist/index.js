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
import { uploadImage } from './Utils/ImageUpload.js';
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
    await ctx.reply('How can I help you .. ', keyboard.inline());
});
// The bot will respond to the user input with the appropriate meal by using the hears() method.
// Main hanlder .. 
bot.hears(/Breakfast|Lunch|Snacks|Dinner/, async (ctx) => {
    const selected_time = ctx.update.message.text;
    let food = DATA_BASE[weekDay][selected_time];
    food = decorateFoodOutput(food);
    await ctx.reply(food);
    const photoID = 'AgACAgUAAxkDAAIFVmR9xWxBypXl90rhFQi0VVNBYFR6AAJ9vDEbEa_xV8eRd2uawoz1AQADAgADcwADLwQ';
    ctx.reply("I am running 🙋‍♂️🙋‍♂️🙋‍♂️🙋‍♂️🙋‍♂️🙋‍♂️🙋‍♂️😈😈😈");
    await ctx.replyWithPhoto({ source: photoID });
    footerMessage(ctx);
});
// for all the generic pourous message... 
bot.command('upload', async (ctx) => {
    for (let i = 1; i <= 4; i++) {
        const imagPath = `c:/CODE_C/Projects/AIT_MESS_Telegram_Bot/public/images/FoodCourt/${i}.jpg`;
        const ref = await uploadImage(imagPath, '1276073176');
        ctx.reply(ref);
        console.log("PHOTO ", i, "  : ");
        console.log(ref);
        console.log();
    }
});
bot.on(message('text'), async (ctx) => {
    // Get the option selected by the user from the message
    const menu_option = ctx.update.message.text;
    const selected_time = getMenuOption(menu_option);
    // If the user has selected a valid option
    if (selected_time) {
        // Get the food for this option on the current day
        const food = DATA_BASE[weekDay][selected_time];
        // Send the food to the user
        return await ctx.reply(food);
        footerMessage(ctx);
    }
    else {
        ctx.reply('please select from given options');
    }
    // If the user has not selected an option yet, send the available options
    // await ctx.reply('Please Select the Time', keyboard.inline());
    footerMessage(ctx);
});
// To handle the Inline Keyboard selection ... 
bot.on('callback_query', async (ctx) => {
    // Get the selected time from the callback query
    let selected_time = ctx.update.callback_query;
    selected_time = selected_time.data;
    if (selected_time) {
        // Get the food for the selected time
        const food = DATA_BASE[weekDay][selected_time];
        // Reply to the user with the food
        ctx.reply(food);
        // Answer the callback query
        await ctx.answerCbQuery('🫠🫠🙃');
        footerMessage(ctx);
    }
});
bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
