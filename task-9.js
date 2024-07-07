// Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню.

const max = 50;
const min = 23;

for (let i = max; i >= min; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }    
}