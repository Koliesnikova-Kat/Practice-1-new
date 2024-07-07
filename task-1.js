// =====Функція для визначення типу змінної=====

// Написати функцію для визначення типу змінної.
// Функція отримує будь-яке значення в якості аргументу і визначає тип цієї змінної.
// Виведіть в консоль повідомлення "Тип змінної: type"

function typeOfVariable(variable) {
  return `Тип змінної: ${typeof variable}`;
}

console.log(typeOfVariable('Ukraine'));
console.log(typeOfVariable(1994));
console.log(typeOfVariable(true));