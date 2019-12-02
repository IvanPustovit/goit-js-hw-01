'use strict';
let credits = 23580;
let pricePerDroud = 3000;
let how = prompt('ВВедите количество дроидов');
let totalPrice = how * pricePerDroud

if (how === null) {
    console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    console.log('Вы купили', how, 'дроидов, на счету осталось ', credits - totalPrice, 'кредитов.');
}