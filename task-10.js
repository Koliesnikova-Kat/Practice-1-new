// За допомогою циклу (for) знайдіть суму всіх непарних чисел у проміжку від min до max включно.

const min = 0;
const max = 50;

let sum = 0;

for (let i = min; i <= max; i++) {
    if (!(i % 2 === 0)) {
        sum += i;
    }    
}

console.log(sum);