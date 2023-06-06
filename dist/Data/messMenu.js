var MealTime;
(function (MealTime) {
    MealTime["Breakfast"] = "Breakfast";
    MealTime["Lunch"] = "Lunch";
    MealTime["Snacks"] = "Snacks";
    MealTime["Dinner"] = "Dinner";
})(MealTime || (MealTime = {}));
const DATA_BASE = {
    Monday: {
        [MealTime.Breakfast]: 'Pav Bhaji + Tea🍵',
        [MealTime.Lunch]: '🍆 Baingan-Bharta, 🐄 Curd',
        [MealTime.Snacks]: 'Masala-Pav 🍔 +  Tea 🍵',
        [MealTime.Dinner]: 'Matar-Penner, Papad, Rice-kheer',
    },
    Tuesday: {
        [MealTime.Breakfast]: `Poha / Black Chana/ Dalia , Coffee ☕`,
        [MealTime.Lunch]: `Rajma-Masala , Crud`,
        [MealTime.Snacks]: `Samosa + Tea🍵`,
        [MealTime.Dinner]: `Puri/Chapati  , Custard🍮`,
    },
    Wednesday: {
        [MealTime.Breakfast]: `Idli + ( Sambar / Coconut Chutney )[ Alt  ] `,
        [MealTime.Lunch]: `Veg Biryani, Papad , Raita`,
        [MealTime.Snacks]: `Vada Pav, Tea`,
        [MealTime.Dinner]: `Chicken`,
    },
    Thursday: {
        [MealTime.Breakfast]: `Puri Bhaji + Tea🍵`,
        [MealTime.Lunch]: `Rajma-masala + Curd`,
        [MealTime.Snacks]: `'Poha , Coffee`,
        [MealTime.Dinner]: `Aloo Gobhi / Kofta Curry`,
    },
    Friday: {
        [MealTime.Breakfast]: `Bread Butter - Veg Cutlet / Boiled Egg + Tea🍵`,
        [MealTime.Lunch]: `ALoo Matar, Curd`,
        [MealTime.Snacks]: `Bread Pakoda + Tea🍵`,
        [MealTime.Dinner]: `[ 🍽️ Paid 💰 ] -- Loki / Soyabean Sabzi`,
    },
    Saturday: {
        [MealTime.Breakfast]: `Aloo Paratha , Curd + Tea🍵`,
        [MealTime.Lunch]: `Chole Bhature / Jeera Rice, Boondi Raita`,
        [MealTime.Snacks]: `Bhel + Coffee☕`,
        [MealTime.Dinner]: `Soyabean`,
    },
    Sunday: {
        [MealTime.Breakfast]: `Onion-Tomato Uttapam 🔥 + Sambar + Tea🍵`,
        [MealTime.Lunch]: `Chana Masala , Jeera rice`,
        [MealTime.Snacks]: `Cream Roll + Tea🍵`,
        [MealTime.Dinner]: `[ 🍽️ Paid 💰 ] -- Aloo Palak , Mix dal`,
    },
};
export { DATA_BASE, MealTime };
