import { MealTime } from "../../Data/messMenu.js";
import { HourTime } from "../DayTime.js";
import { messsFoodHanlder } from "./MessHandler.js";
async function nowHanlder(ctx) {
    // const selected_time: string = ctx.update.message.text;
    let ctx_copy = ctx;
    console.log('Time is in ', typeof HourTime, " TIME ", HourTime);
    const timeSlot = (HourTime) => {
        if (HourTime <= 9) {
            return MealTime.Breakfast;
        }
        else if (HourTime <= 2) {
            return MealTime.Lunch;
        }
        else if (HourTime <= 6) {
            return MealTime.Snacks;
        }
        else {
            return MealTime.Dinner;
        }
    };
    const slot = timeSlot(HourTime);
    ctx_copy.update.message.text = slot;
    messsFoodHanlder(ctx_copy);
}
export { nowHanlder };
