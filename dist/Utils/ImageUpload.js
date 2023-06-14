import * as fs from 'fs';
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN || 'noKey');
async function uploadImage(photoPath, CHAT_ID) {
    const photoStream = fs.createReadStream(photoPath);
    try {
        const response = await bot.telegram.sendPhoto(CHAT_ID, { source: photoStream });
        const photoReference = response.photo[0].file_id;
        return photoReference;
    }
    catch (error) {
        console.error('Error uploading photo:', error);
        return "error";
    }
}
export { uploadImage };
