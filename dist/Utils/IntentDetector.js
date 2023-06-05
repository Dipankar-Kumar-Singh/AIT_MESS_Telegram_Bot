function intent(data) {
    const words = data.split(' ');
    console.log(words);
    const target = [
        'OAC',
        'FoodCourt',
        'Breakfast',
        'Lunch',
        'Dinner',
        'Now'
    ];
    words.forEach(word => {
        if (target.includes(word)) {
            return word;
        }
    });
}
export {};
