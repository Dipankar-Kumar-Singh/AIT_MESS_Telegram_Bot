interface MessMenu { 
	[day : string] : {
		[time : string] : string 
	}
}

enum MealTime {
	Breakfast = 'Breakfast',
	Lunch = 'Lunch',
	Snacks = 'Snacks',
	Dinner = 'Dinner',
};

// const DATA_BASE:MessMenu = {
// 	Monday: {
// 		'Breakfast': 'Pav Bhaji + Tea🍵',
// 		'Lunch': '🍆 Baingan-Bharta, 🐄 Curd',
// 		'Snacks': 'Masala-Pav 🍔 +  Tea 🍵',
// 		'Dinner': 'Matar-Panner, Papad, Rice-kher  ',
// 	},
// 	Tuesday: {
// 		'Breakfast': `Poha / Black Chana/ Dalia , Coffee ☕`,
// 		'Lunch': `Rajma-Masala , Crud`,
// 		'Snacks': `Samosa + Tea🍵`,
// 		'Dinner': `Puri/Chapati  , Custard🍮`,
// 	},
// 	Wednesday: {
// 		'Breakfast': `Idli + ( Sambhar / Coconut Chutney )[ Alt  ] `,
// 		'Lunch': `Veg Biryani, Papad , Raita`,
// 		'Snacks': `Vada Pav, Tea`,
// 		'Dinner': `Chicken`,
// 	},
// 	Thursday: {
// 		'Breakfast': `Puri Bhaji + Tea🍵`,
// 		'Lunch': `Rajma-masala + Curd`,
// 		'Snacks':`'Poha , Coffee`,
// 		'Dinner': `Aloo Gobhi / Kofta Curry`,
// 	},
// 	Friday: {
// 		'Breakfast': `Bread Butter - Veg Cutlet / Boiled Egg + Tea🍵`,
// 		'Lunch': `ALoo Matar, Curd`,
// 		'Snacks': `Bread Pakoda + Tea🍵`,
// 		'Dinner': `[ 🍽️ Paid 💰 ] -- Loki / Soyabean Sabzi`,
// 	},
// 	Saturday: {
// 		'Breakfast': `Aloo Paratha , Curd + Tea🍵`,
// 		'Lunch': `Chole Bhatoore / Jeera Rice, Boondi Raita`,
// 		'Snacks': `Bhel + Coffe☕`,
// 		'Dinner': `Soyabeen`,
// 	},
// 	Sunday: {
// 		'Breakfast': `Onion-Tomato Uttapam 🔥 + Sambhar + Tea🍵`,
// 		'Lunch': `Chana Masala , Jeera rice`,
// 		'Snacks': `Cream Roll + Tea🍵`,
// 		'Dinner': `[ 🍽️ Paid 💰 ] -- Aloo Palak , Mix dal`,
// 	},
// };

const DATA_BASE: MessMenu = {
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


export { DATA_BASE , MealTime } ;