import { messsFoodHanlder } from "./MessHandler.js";
import { nowHanlder } from "./NowHandler.js";
import { OACHandler } from "./OACHandler.js";
import { foodCourtHanlder } from "./foodCourtHandler.js";

async function intentHanlder(uesr_intent:string): Promise<((ctx: any) => Promise<void>)> {

    enum Target {
        OAC = 'OAC' , 
        FoodCourt = 'FoodCourt',
        Breakfast= 'Breakfast' ,
        Lunc = 'Lunch' ,
        Dinner = 'Dinner' ,
        Now = 'Now'
    } ;

    switch (uesr_intent) {
        case Target.OAC:
            return OACHandler ;
        case Target.FoodCourt : 
            return foodCourtHanlder ;
        case Target.Now : 
            return nowHanlder ;
        default:
            // for the mess menu
            return messsFoodHanlder ;
    }
}

export { intentHanlder }