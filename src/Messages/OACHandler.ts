import { OACMenu } from "../Data/OACMenu.js";

async function OACHandler(ctx: any){
    OACMenu.forEach( async menu_pic_URL => { 
        await ctx.replyWithPhoto(menu_pic_URL) ;
    })
}

export { OACHandler } ;