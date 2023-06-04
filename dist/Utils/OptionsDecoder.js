const menuOptionsMap = {
    '/morning': 'Breakfast',
    '/afternoon': 'Lunch',
    '/evening': 'Snacks',
    '/night': 'Dinner',
};
function getMenuOption(command) {
    const option = menuOptionsMap[command];
    return option;
}
export { getMenuOption };
