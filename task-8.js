// Оголоси функцію isEvenNumber(number), яка перевіряє за допомогою тернарного оператора чи отримане значення є парним числом.
// І виводить відповідне повідомлення: 'Число парне' або 'Число непарне'.
// Якщо функція отримує не число, вивести повідомлення 'Невалідне значення!'

function isEvenNumber(number) {
    if (typeof number === 'number') {
        return (number % 2 === 0) ? 'Число парне' : 'Число непарне';
    } else {
        return 'Невалідне значення!';
    }
}

console.log(isEvenNumber(2));
console.log(isEvenNumber('Ukraine'));
console.log(isEvenNumber(3));
console.log(isEvenNumber('0'));
console.log(isEvenNumber(0));
console.log(isEvenNumber(true));