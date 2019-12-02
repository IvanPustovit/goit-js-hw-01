"use strict";
const countryEnter = prompt("Ваша страна доставки");

const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;
let country;

if (countryEnter === null) {
    console.log("Отменено пользователем");
} else if (countryEnter != null) {
    country = countryEnter.toLocaleLowerCase();
}

switch (country) {

    case "китай":
        alert(`Доставка в ${country} будет стоить ${priceChina} кредитов`);
        break;

    case "чили":
        alert(`Доставка в ${country} будет стоить ${priceChili} кредитов`);
        break;

    case "австралия":
        alert(`Доставка в ${country} будет стоить ${priceAustralia} кредитов`);
        break;

    case "индия":
        alert(`Доставка в ${country} будет стоить ${priceIndia} кредитов`);
        break;

    case "ямайка":
        alert(`Доставка в ${country} будет стоить ${priceJamaica} кредитов`);
        break;

    default:
        alert("В вашей стране доставка не доступна");
};