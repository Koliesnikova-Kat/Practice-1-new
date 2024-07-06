// Змінна num може набувати 4 значенняЖ 1, 2, 3 або 4. 
// Якщо вона має значення '1', то у змінну result запишемо 'зима',
// якщо має значення '2' - 'весна' тощо. Розв'яжіть завдання через switch-case.



// function checkSeason(num) {
//   let result;
//   switch (num) {
//     case 1:
//       result = 'зима';
//       break;
//     case 2:
//       result = 'весна';
//       break;
//     case 3:
//       result = 'літо';
//       break;
//     case 4:
//       result = 'осінь';
//       break;
//     default:
//       result = 'невалідне значення';
//   }
//   return result;
// }

// console.log(checkSeason(1));
// console.log(checkSeason(2));
// console.log(checkSeason(3));
// console.log(checkSeason(4));
// console.log(checkSeason(5));







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