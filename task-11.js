// Написати функцію getCountryInfo(country), котра буде отримувати назву країни і виводити інформацію про неї.
// China => 'Китай - найбільша країна за населенням у світі'.
// Australia => 'Австралія - найбільший острів та країна в Океанії'.
// France => 'Франція відома своєю гастрономією та мистецтвом'.
// Germany => 'Німеччина має найвищий рівень економіки в Європі'.
// Canada => 'Канада - друга за площею країна у світі, відома своєю природою'.
// Якщо країни немає, вивести повідомлення 'Інформація про цю країну відсутня'.

function getCountryInfo(country) {
    let message;
    switch (country) {
        case 'China':
            message = 'Китай - найбільша країна за населенням в світі';
            break;
        case 'Australia':
            message = 'Австралія - найбільший острів та країна в Океанії';
            break;
        case 'France':
            message = 'Франція відома своєю гастрономією та мистецтвом';
            break;
        case 'Germany':
            message = 'Німеччина має найвищий рівень економіки в Європі';
            break;
        case 'Canada':
            message = 'Канада - друга за площею країна в світі, відома своєю природою';
            break;
        default:
            message = 'Інформація про цю країну відсутня';
            break;
    }
    return message;
}

console.log(getCountryInfo('Ukraine'));
console.log(getCountryInfo('China'));
console.log(getCountryInfo('Australia'));
console.log(getCountryInfo('France'));
console.log(getCountryInfo('Germany'));
console.log(getCountryInfo('Canada'));
console.log(getCountryInfo('Bulgaria'));