// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms), яка перевіряє, чи може користувач зареструватися на сайті,
// і повертає true - якщо може зареєструватись, і false - якщо не може.
// Користувач може зареєструватись, якщо йому виповнилося 13 років, і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (показує, чи прийняв користувач умови користування).

function canRegisterOnSite(age, hasAcceptedTerms) {
    return age >= 13 && hasAcceptedTerms;
}

console.log(canRegisterOnSite(12, false));
console.log(canRegisterOnSite(12, true));
console.log(canRegisterOnSite(15, false));
console.log(canRegisterOnSite(15, true));