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

async function footerMessage (ctx: any){
	await ctx.reply(getRandomEmoji()) ;
	await ctx.reply('For more options : ↙️ Click ≡ Menu Button') ;
	await ctx.reply('Anything else you want to know ? ' , keyboard.inline());
}

bot.start(async (ctx)=>{
	await greetMember(ctx) ;
	await ctx.reply('How can I help you .. ' , keyboard.inline());
})

// The bot will respond to the user input with the appropriate meal by using the hears() method.
// Main hanlder .. 
bot.hears(/Breakfast|Lunch|Snacks|Dinner/, async (ctx) => {
	const selected_time: string = ctx.update.message.text;
	let food = DATA_BASE[weekDay][selected_time] ;
	food = decorateFoodOutput(food) ;
	await ctx.reply(food);
	footerMessage(ctx) ;
});

// for all the generic pourous message... 

bot.command('upload' , async () => {
	
	for(let i = 0 ; i < 4 ; i++){
		const imagPath = `c:/CODE_C/Projects/AIT_MESS_Telegram_Bot/public/images/FoodCourt/${i}.jpg` ;
		uploadImage(imagPath,'CHAT_ID_HERE') 
	}
}) ;



bot.on(message('text'), async (ctx) => {
	// Get the option selected by the user from the message
	const menu_option = ctx.update.message.text ;
	const selected_time: string | undefined = getMenuOption(menu_option);
	// If the user has selected a valid option
	if (selected_time) {
		// Get the food for this option on the current day
		const food = DATA_BASE[weekDay][selected_time];
		// Send the food to the user
		return await ctx.reply(food);
		footerMessage(ctx) ;
	} else {
		ctx.reply('please select from given options')
	}

	// If the user has not selected an option yet, send the available options
	// await ctx.reply('Please Select the Time', keyboard.inline());
	footerMessage(ctx) ;
});


// To handle the Inline Keyboard selection ... 
bot.on('callback_query', async (ctx: any) => {
    // Get the selected time from the callback query
	let selected_time: any = ctx.update.callback_query as any;
	selected_time = selected_time.data;
	if (selected_time) {
		// Get the food for the selected time
		const food = DATA_BASE[weekDay][selected_time];
		// Reply to the user with the food
		ctx.reply(food);
		// Answer the callback query
		await ctx.answerCbQuery('🫠🫠🙃');
		footerMessage(ctx) ;
	}
});


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
export {};