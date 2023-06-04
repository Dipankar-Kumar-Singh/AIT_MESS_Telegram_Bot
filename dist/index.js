import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import dotenv from 'dotenv';
import { DATA_BASE } from './Data/messMenu.js';
import { weekDay } from './Utils/DayTime.js';
import { Keyboard } from 'telegram-keyboard';
import { getMenuOption } from './Utils/OptionsDecoder.js';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN || 'noKey');
const keyboard = Keyboard.make([['Breakfast', 'Lunch', 'Snacks', 'Dinner']])
    .oneTime(false)
    .resize();
// The bot will respond to the user input with the appropriate meal by using the hears() method.
bot.hears(/Breakfast|Lunch|Snacks|Dinner/, async (ctx) => {
    // The bot will get the user's input and save it to the selected_time variable.
    const selected_time = ctx.update.message.text;
    // The bot will retrieve the selected meal from the database. If the meal does not exist, the bot will respond with a message.
    const food = DATA_BASE[weekDay][selected_time] || 'Please Select the Options from List';
    // The bot will respond to the user with the selected meal.
    await ctx.reply(food);
    await ctx.reply('Anything else you want to know ? ', keyboard.inline());
});
bot.on(message('text'), async (ctx) => {
    // Get the option selected by the user from the message
    const option = getMenuOption(ctx.update.message.text);
    // If the user has selected a valid option
    if (option) {
        // Get the food for this option on the current day
        const food = DATA_BASE[weekDay][option];
        // Send the food to the user
        return await ctx.reply(food);
    }
    // If the user has not selected an option yet, send the available options
    // await ctx.reply('Please Select the Time', keyboard.inline());
    await ctx.reply('Please Select the Time', keyboard.reply());
});
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
    }
});
bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
