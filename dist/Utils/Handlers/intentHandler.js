import { messsFoodHanlder } from "./MessHandler.js";
import { nowHanlder } from "./NowHandler.js";
import { OACHandler } from "./OACHandler.js";
import { foodCourtHanlder } from "./foodCourtHandler.js";
async function intentHanlder(uesr_intent) {
    let Target;
    (function (Target) {
        Target["OAC"] = "OAC";
        Target["FoodCourt"] = "FoodCourt";
        Target["Breakfast"] = "Breakfast";
        Target["Lunc"] = "Lunch";
        Target["Dinner"] = "Dinner";
        Target["Now"] = "Now";
    })(Target || (Target = {}));
    ;
    switch (uesr_intent) {
        case Target.OAC:
            return OACHandler;
        case Target.FoodCourt:
            return foodCourtHanlder;
        case Target.Now:
            return nowHanlder;
        default:
            // for the mess menu
            return messsFoodHanlder;
    }
}
export { intentHanlder };
