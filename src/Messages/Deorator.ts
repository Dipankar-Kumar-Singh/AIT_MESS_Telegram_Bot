// for decorating the output ..

function decorateFoodOutput(food: string, lineLength: number = 25): string {
    const decoratedFood = `🍽️ ${food} 🍽️`;
  
    const horizontalLine = '━'.repeat(lineLength);
    const paddingLength = Math.max(0,Math.floor((lineLength - decoratedFood.length) / 2));
  
    const topLine = `${horizontalLine}\n`;
    const bottomLine = `\n${horizontalLine}`;
  
    const paddedFood = `${' '.repeat(paddingLength)}${decoratedFood}${' '.repeat(paddingLength)}`;
  
    return `${topLine}${paddedFood}${bottomLine}`;
}
  
export { decorateFoodOutput } ;