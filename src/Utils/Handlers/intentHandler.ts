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
            console.log(Target.OAC) ;
            return OACHandler ;
            break;
        case Target.FoodCourt : 
            console.log(Target.FoodCourt) ;
            return foodCourtHanlder ;
            break
        case Target.Now : 
            console.log(Target.Now) ;
            return nowHanlder ;
            break
        default:
            // for the mess menu
            console.log("Normal -> B L S D") ;
            return messsFoodHanlder ;
            break;
    }
}

export { intentHanlder }