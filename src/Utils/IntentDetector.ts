function intent(data: string): string | undefined {
	const words = data.toLowerCase().split(' ');
	console.log(words);

	const target: string[] = [
		'OAC',
		'FoodCourt',
		'Breakfast',
		'Lunch',
		'Dinner',
		'Now',
	];

	let forwardMapping: Map<string, string[]> = new Map<string, string[]>();

	target.forEach((word) => {
		let alias: string[] = [word, word.toLowerCase()];
		forwardMapping.set(word, alias);
	});

	let fc_alias = forwardMapping.get('FoodCourt');
	if (fc_alias) fc_alias.push('fc');

	if (fc_alias) forwardMapping.set('FoodCourt', fc_alias);

	let backwardMapping: Map<string, string> = new Map<string, string>();

	forwardMapping.forEach((alies_list, parent_word) => {
		alies_list.forEach((child_word) => {
			backwardMapping.set(child_word, parent_word);
		});
	});

	// now for each word --> we know its' mapping [ it's parent ]
	// simialr to DSU ( Disjoin set union )
	// similar approach is used in ELASTIC SEARCH ..

	words.forEach((word) => {
		// if(target.includes(word)) {
		//     return word ;
		// }

		if (backwardMapping.has(word)) {
			const parent_word: string = backwardMapping.get(word)!;
			return parent_word;
		}
	});

	return undefined;

	// advance indent ..
}

export { intent };
