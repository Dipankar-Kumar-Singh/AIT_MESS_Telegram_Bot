// for decorating the output ..
function decorateFoodOutput(food, lineLength = 25) {
    const decoratedFood = `🍽️ ${food} 🍽️`;
    const horizontalLine = '━'.repeat(lineLength);
    const paddingLength = Math.max(0, Math.floor((lineLength - decoratedFood.length) / 2));
    const topLine = `${horizontalLine}\n`;
    const bottomLine = `\n${horizontalLine}`;
    const paddedFood = `${' '.repeat(paddingLength)}${decoratedFood}${' '.repeat(paddingLength)}`;
    return `${topLine}${paddedFood}${bottomLine}`;
}
export { decorateFoodOutput };
