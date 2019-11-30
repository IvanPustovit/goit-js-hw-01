"use strict";

let input;
let total = 0;

while (true) {
    input = prompt('Введите число');

    if (input === NaN) {
        break;
    }

    input = Number(input);

    if (input <= 0) {
        break;
    }

    total += input;
}

if(Number.isNaN(input)){
        alert('Было введено не число, попробуйте еще раз');
        
    }
alert(total);
