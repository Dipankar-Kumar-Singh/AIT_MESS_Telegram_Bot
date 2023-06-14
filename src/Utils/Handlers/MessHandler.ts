import { DATA_BASE } from "../../Data/messMenu.js";
import { decorateFoodOutput } from "../../Messages/Deorator.js";
import { weekDay } from "../DayTime.js";
import { intent } from "../IntentDetector.js";

// the context .. needs to have proper data ( Proper formating in it ..  ) ;
async function messsFoodHanlder(ctx:any) {

    //  ctx.update.message.text -> It makes selection strict .. ( No ill formating )
    // const selected_time: string = ctx.update.message.text;

    // why we needed intent .. ? because .. we can now Handle even the ill formted string 
    // so ... things like .. fc , Fc --> these will be intreprected as FoodCourt ( System Type )
    
    const selected_time: string = intent(ctx.update.message.text)!;
	let food = DATA_BASE[weekDay][selected_time] ;
	food = decorateFoodOutput(food) ;
	await ctx.reply(food);
}

async function messBreakfastHandler(ctx:any) {
    const selected_time: string = intent(ctx.update.message.text)!;
	let food = DATA_BASE[weekDay][selected_time] ;
	food = decorateFoodOutput(food) ;
	await ctx.reply(food);
}




export { messsFoodHanlder  } 


