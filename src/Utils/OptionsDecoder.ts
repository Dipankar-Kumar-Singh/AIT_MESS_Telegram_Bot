const menuOptionsMap: { [key: string]: string } = {
	'/morning': 'Breakfast',
	'/afternoon': 'Lunch',
	'/evening': 'Snacks',
	'/night': 'Dinner',
};

function getMenuOption(command: string): string | undefined {
	const option = menuOptionsMap[command];
	return option;
}


export { getMenuOption }