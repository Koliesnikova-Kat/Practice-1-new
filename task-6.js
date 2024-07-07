// Оголоси функцію calculateSquare(value).
// Функція має перевіряти чи є отримане знаяення числом, або, за можлтвості, перетворити рядок на число.
// Якщо це число, то функція підносить його у квадрат і повертає рядок `The square of ${numberValue} is ${squaredNumber}`
// numberValue - отримане число, або перетворене з рядка число.
// squaredNumber - numberValue у квадраті.
// Якщо значення не є числом, функція повертає рядок 'Invalid input!'.

function calculateSquare(value) {
    const numberValue = parseFloat(value);
    
    if (isNaN(numberValue)) {
        return 'Invalid input!';
    } else {
        return `The square of ${numberValue} is ${Math.pow(numberValue, 2)}`;
    }
}

console.log(calculateSquare(2));
console.log(calculateSquare(true));
console.log(calculateSquare('3'));
console.log(calculateSquare('1fjtyhtyh'));
console.log(calculateSquare(0));
console.log(calculateSquare('hnghncg2'));
console.log(calculateSquare(4,42));