"use strict"

// 1. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності
// Для рішення задачі необхідно використовувати тільки методи масивів!

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(productOfArray); // 24

// 2. Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
// Для рішення задачі необхідно використовувати методи масивів та Object.entries/Object.fromEnties методи

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAnGEs: '48.7584',
};
    
function optimizer(data) {
   const optimizedData = {};
   Object.entries(data).forEach(([key, value]) => {
    optimizedData[key.toLowerCase()] = Number(value).toFixed(2);
   })
   return optimizedData;
};
   
let updatedPriceData = optimizer(priceData);
    
console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}   

// 3. Задача на фільтрування масиву
// Реалізуйте фільтрування імен які починаються з голосної двома способами:
// через умовну конструкцію всередині методу перебора;
// через вбудований метод масивів для фільтрації.
// Рішення має працювати незалежно від конкретних значень в масиві імен

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const vowels = 'АЕЄИІЇОУЮЯ';

// 1 спосіб
let filteredNames1 = [];
userNames.forEach((name) => {
    if (vowels.split('').indexOf(name[0].toUpperCase()) != -1 ) {
        filteredNames1.push(name);
    }
});


// 2 спосіб
let filteredNames2 = userNames.filter(name => {
    if (vowels.split('').indexOf(name[0].toUpperCase()) != -1 ) {
        return name;
    }
})

console.log(filteredNames1); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredNames2); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// 4. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку
// Рішення має працювати незалежно від конкретних значень в масиві імен

const names = ['Петрик Ольга Іванівна', 'Гнатюк Петро Антонович', 'Рудко Андрій Опанасович'];

let initials = names.sort().map(name => {
    return name.split(' ').reduce((accumulator, currentValue) => accumulator + currentValue[0] + '.', '')
});

console.log(initials); // [ 'Г.П.А.', 'П.О.І.', 'Р.А.О.']

// 5. Додаткова задача*
// Напишіть функцію sortArray яка буде коректно сортувати масив чисел по зростанню. 
// Якщо функція приймає порожній масив, значення null або undefined, вона має повернути порожній масив.

function sortArray(arr) {
    if ( Array.isArray(arr) ) {
        return arr.sort((a,b) => a - b);
    }
    return [];
}

console.log(sortArray([1, 12, 10, 50, 5])); // поверне [1,5,10,12,50]
console.log(sortArray(null)); // поверне []