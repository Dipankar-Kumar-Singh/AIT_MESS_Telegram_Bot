import { MealTime } from '../../Data/messMenu.js';
import { HourTime, updateDateTime, weekDay } from '../DayTime.js';
import { messsFoodHanlder } from './MessHandler.js';

async function nowHanlder(ctx: any) {
	updateDateTime(ctx.update.message.date);
	let ctx_copy = ctx;

	const timeSlot = (HourTime: number) => {
		if (HourTime <= 9) {
			return MealTime.Breakfast;
		} else if (HourTime <= 2) {
			return MealTime.Lunch;
		} else if (HourTime <= 6) {
			return MealTime.Snacks;
		} else {
			return MealTime.Dinner;
		}
	};

	const slot = timeSlot(HourTime);
    // artifically molding the struct of ctx ( ctx of keyboard callback )
	ctx_copy.update.message.text = slot;

	messsFoodHanlder(ctx_copy);
}

export { nowHanlder };
