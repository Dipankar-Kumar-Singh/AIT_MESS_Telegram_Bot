async function greetMember(ctx: any) {
	await ctx.reply('Welcome🫠😀');
	await ctx.reply('😀');
	await ctx.reply('🫠');
	await ctx.reply('🤖');

	const aboutMe: string = `
    Hi there! I'm your Mess Bot 🤖. I'm here to assist you with information about the menu options available in the mess.Just ask me what's available for each mealtime:
    `;

	const options: string = `
    ---╔═══════════════════════╗
    ║ Meal Options          
    ╠═══════════════════════╣
    ║ Breakfast 🥞           
    ║ Lunch 🍔             
    ║ Snacks🍿         
    ║ Dinner 🍽          
    ╚═══════════════════════╝`;

	// await ctx.reply("Hi.... I am your mess Bot 🤖") ;
	// await ctx.reply("You can ask me what's in the mess") ;

	await ctx.reply(aboutMe);
	await ctx.reply(options);
}

export { greetMember };
