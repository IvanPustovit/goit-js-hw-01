'use strict';
const credits = 23580;
const pricePerDroud = 3000;
let howDroids = prompt('ВВедите количество дроидов');
let totalPrice = howDroids * pricePerDroud

if (howDroids === null) {
    console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    console.log(`Вы купили ${howDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}