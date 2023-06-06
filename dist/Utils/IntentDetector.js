import { MealTime } from "../Data/messMenu.js";
function intent(data) {
    const words = data.toLowerCase().split(' ');
    const target = [
        'OAC',
        'FoodCourt',
        MealTime.Breakfast,
        MealTime.Lunch,
        MealTime.Snacks,
        MealTime.Dinner,
        'Now',
    ];
    let forwardMapping = new Map();
    target.forEach((word) => {
        let alias = [word, word.toLowerCase()];
        forwardMapping.set(word, alias);
    });
    extraAliasSupport(forwardMapping);
    let backwardMapping = new Map();
    forwardMapping.forEach((alies_list, parent_word) => {
        alies_list.forEach((child_word) => {
            backwardMapping.set(child_word, parent_word);
        });
    });
    // now for each word --> we know its' mapping [ it's parent ]
    // simialr to DSU ( Disjoin set union )
    // similar approach is used in ELASTIC SEARCH ..
    let matched_word = '';
    words.forEach((word) => {
        if (backwardMapping.has(word)) {
            const parent_word = backwardMapping.get(word);
            matched_word = parent_word;
            return parent_word;
        }
    });
    if (matched_word)
        return matched_word;
    return undefined;
}
async function extraAliasSupport(forwardMapping) {
    addTolist('fc', 'FoodCourt', forwardMapping);
    addTolist('morning', MealTime.Breakfast, forwardMapping);
    addTolist('subah', MealTime.Breakfast, forwardMapping);
    addTolist('shubha', MealTime.Breakfast, forwardMapping);
    addTolist('afternoon', MealTime.Lunch, forwardMapping);
    addTolist('dopehar', MealTime.Lunch, forwardMapping);
    addTolist('dopahar', MealTime.Lunch, forwardMapping);
    addTolist('dophar', MealTime.Lunch, forwardMapping);
    addTolist('dopher', MealTime.Lunch, forwardMapping);
    addTolist('saam', MealTime.Snacks, forwardMapping);
    addTolist('sham', MealTime.Snacks, forwardMapping);
    addTolist('sam', MealTime.Snacks, forwardMapping);
    addTolist('raat', MealTime.Dinner, forwardMapping);
    addTolist('rat', MealTime.Dinner, forwardMapping);
}
;
async function addTolist(toAdd, target, forwardMapping) {
    let aliasList = forwardMapping.get(target);
    if (aliasList)
        aliasList.push(toAdd);
    if (aliasList)
        forwardMapping.set(target, aliasList);
}
export { intent };
