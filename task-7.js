// Оголоси функцію checkString(value), яка перевіряє, чи отримане значення є рядком і не міститть символ $.
// Якщо це так, вивести кількість символів у рядку.
// Якщо значення не є рядком, вивести повідомлення про невірний ввід.

function checkString(value) {
    if (typeof value === 'string' && !value.includes('$')) {
        return `Кількість символів у рядку: ${value.length}`;
    } else {
        return 'Invalid input!';
    }
}

console.log(checkString('Ukraine'));
console.log(checkString(5));
console.log(checkString('2024'));
console.log(checkString('Ukraine$'));