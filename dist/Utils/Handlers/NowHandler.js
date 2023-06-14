import { MealTime } from '../../Data/messMenu.js';
import { HourTime, updateDateTime } from '../DayTime.js';
import { messsFoodHanlder } from './MessHandler.js';
async function nowHanlder(ctx) {
    updateDateTime(ctx.update.message.date);
    let ctx_copy = ctx;
    const timeSlot = (HourTime) => {
        if (HourTime <= 9) {
            return MealTime.Breakfast;
        }
        else if (HourTime <= 14) {
            return MealTime.Lunch;
        }
        else if (HourTime <= 18) {
            return MealTime.Snacks;
        }
        else {
            return MealTime.Dinner;
        }
    };
    const slot = timeSlot(HourTime);
    // artifically molding the struct of ctx ( ctx of keyboard callback )
    ctx_copy.update.message.text = slot;
    messsFoodHanlder(ctx_copy);
}
export { nowHanlder };
