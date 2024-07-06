// Напишіть функцію, яка приймає аргумент та визначає його тип даних.
// Якщо тип - строка, функція повертає "string", якщо число - "number", в інших випадках - "unknown".

function variableType(variable) {
    if (typeof variable === 'string') {
        return 'string';
    } else if (typeof variable === 'number') {
        return 'number';
    } else {
        return 'unknown';
    }
}

console.log(variableType('Ukraine'));
console.log(variableType(1994));
console.log(variableType(true));