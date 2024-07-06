// Напишіть програму, яка отримає від користувача число (кількість хвилин) і виведе у консоль рядок у форматі годин і хвилин 70 === 01:10



// function convertTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const modifiedHours = String(hours).padStart(2, 0);
//   const minutes = totalMinutes % 60;
//   const modifiedMinutes = String(minutes).padStart(2, 0);
//   return `${modifiedHours}:${modifiedMinutes}`;
// }

// console.log(convertTime(70));
// console.log(convertTime(50));
// console.log(convertTime(170));





// Написати функцію для обчислення довжини рядка.
// Функція отримує рядок в якості аргументу і виводить в консоль повідомлення:
// "Довжина рядка length"

function lengthOfString(stringLength) {
  return `Довжина рядка: ${stringLength.length} символів`;
}

console.log(lengthOfString('Ukraine'));