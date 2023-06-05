import * as fs from 'fs';
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN || 'noKey');

async function uploadImage(photoPath:any , CHAT_ID:string) {

	// let photoPath = "C:/CODE_C/Projects/AIT_MESS_Telegram_Bot/src/food.webp" ;
	const photoStream = fs.createReadStream(photoPath);
	try {
	  const response = await bot.telegram.sendPhoto(CHAT_ID, { source: photoStream });
	  const photoReference = response.photo[0].file_id;
	  bot.telegram.sendPhoto(CHAT_ID , photoReference) ;
	  console.log('Photo uploaded:', photoReference);
	} catch (error) {
	  console.error('Error uploading photo:', error);
	}
}


export { uploadImage } ;