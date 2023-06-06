import { DATA_BASE } from "../../Data/messMenu.js";
import { decorateFoodOutput } from "../../Messages/Deorator.js";
import { weekDay } from "../DayTime.js";

async function messsFoodHanlder(ctx:any) {
    const selected_time: string = ctx.update.message.text;
	let food = DATA_BASE[weekDay][selected_time] ;
	food = decorateFoodOutput(food) ;
	await ctx.reply(food);
}


export { messsFoodHanlder } 


