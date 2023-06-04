interface MessMenu { 
	[day : string] : {
		[time : string] : string 
	}
}

const DATA_BASE:MessMenu = {
	Monday: {
		'Breakfast': 'Pav Bhaji + Tea🍵',
		'Lunch': '🍆 Baingan-Bharta, 🐄 Curd',
		'Snacks': 'Masala-Pav 🍔 +  Tea 🍵',
		'Dinner': 'Matar-Panner, Papad, Rice-kher  ',
	},
	Tuesday: {
		'Breakfast': `Poha / Black Chana/ Dalia , Coffee ☕`,
		'Lunch': `Rajma-Masala , Crud`,
		'Snacks': `Samosa + Tea🍵`,
		'Dinner': `Puri/Chapati  , Custard🍮`,
	},
	Wednesday: {
		'Breakfast': `Idli + ( Sambhar / Coconut Chutney )[ Alt  ] `,
		'Lunch': `Veg Biryani, Papad , Raita`,
		'Snacks': `Vada Pav, Tea`,
		'Dinner': `Chicken`,
	},
	Thursday: {
		'Breakfast': `Puri Bhaji + Tea🍵`,
		'Lunch': `Rajma-masala + Curd`,
		'Snacks':`'Poha , Coffee`,
		'Dinner': `Aloo Gobhi / Kofta Curry`,
	},
	Friday: {
		'Breakfast': `Bread Butter - Veg Cutlet / Boiled Egg + Tea🍵`,
		'Lunch': `ALoo Matar, Curd`,
		'Snacks': `Bread Pakoda + Tea🍵`,
		'Dinner': `[ 🍽️ Paid 💰 ] -- Loki / Soyabean Sabzi`,
	},
	Saturday: {
		'Breakfast': `Aloo Paratha , Curd + Tea🍵`,
		'Lunch': `Chole Bhatoore / Jeera Rice, Boondi Raita`,
		'Snacks': `Bhel + Coffe☕`,
		'Dinner': `Soyabeen`,
	},
	Sunday: {
		'Breakfast': `Onion-Tomato Uttapam 🔥 + Sambhar + Tea🍵`,
		'Lunch': `Chana Masala , Jeera rice`,
		'Snacks': `Cream Roll + Tea🍵`,
		'Dinner': `[ 🍽️ Paid 💰 ] -- Aloo Palak , Mix dal`,
	},
};


export { DATA_BASE } ;