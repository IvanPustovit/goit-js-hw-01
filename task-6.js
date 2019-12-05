"use strict";

let input;
let total = 0;

do {
    input = prompt('Введите число');
    let inputUser = Number(input);
    total += inputUser;
} while (input !== null);

alert(total)
