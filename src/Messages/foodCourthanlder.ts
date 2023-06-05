import { foodCourtMenu } from "../Data/FoodCourtMenu.js";
async function foodCourtHanlder(ctx: any) {
	foodCourtMenu.forEach(async (url) => {
		await ctx.replyWithPhoto(url);
	});
}
export { foodCourtHanlder };
