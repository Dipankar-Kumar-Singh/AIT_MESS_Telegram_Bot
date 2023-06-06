import { messsFoodHanlder } from "./MessHandler.js";
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
            break;
        case Target.FoodCourt : 
            return foodCourtHanlder ;
            break
        case Target.Now : 
            return 
        default:
            // for the mess menu
            return messsFoodHanlder ;
            break;
    }

    
}

export { intentHanlder }