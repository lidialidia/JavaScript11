"use strict"

// Задача про перетворення об'єкту

// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.

// Напишіть код який буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми. У результаті ви повинні отримати новий об’єкт.

// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAnGEs: '48.7584',
};
  
let updatedPriceData = {};

for (let [key, value] of Object.entries(priceData)) {
    updatedPriceData[key.toLocaleLowerCase()] = Number(value).toFixed(2);
}

console.log(updatedPriceData)