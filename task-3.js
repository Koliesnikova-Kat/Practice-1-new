// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку, і повертає true - якщо має право на знижку, і false - якщо не має.
// Покупець має право на знижку, якщо він є студентом або пенсміонером, або якщо його вік 12-18 років включно.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - буль (показує чи є покупець студентом);
// isPensioner - буль (показує чи є покупець пенсіонером).

function hasDiscount(age, isStudent, isPensioner) {
  if (isStudent === true) {
    return true;
  } else if (isPensioner === true) {
    return true;
  } else if (age >= 12 && age <= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(hasDiscount(12, false, false));
console.log(hasDiscount(19, true, false));
console.log(hasDiscount(70, false, true));
console.log(hasDiscount(30, false, false));
console.log(hasDiscount(30, false, false));





function hasDiscount(age, isStudent, isPensioner) {
  return (age >= 12 && age <= 18) || isStudent || isPensioner;
}

console.log(hasDiscount(12, false, false));
console.log(hasDiscount(19, true, false));
console.log(hasDiscount(70, false, true));
console.log(hasDiscount(30, false, false));
console.log(hasDiscount(10, false, false));