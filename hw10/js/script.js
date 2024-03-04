"use strict"

// 1. Задача про обчислення різниці часу
// Напишіть функцію яка буде буде приймати 3 параметри
// — початкову дату (string)
// — кінцеву дату (string)
// — розмірність ('days',  'hours', 'minutes', 'seconds')
// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

function durationBetweenDates(startDate, endDate, dimension) {

    let difference = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime());

    const MILLISECONDS_PER_DAY = 86400000;
    const MILLISECONDS_PER_HOUR = 3600000;
    const MILLISECONDS_PER_MINUTE = 60000;
    const MILLISECONDS_PER_SECONDS = 1000;

    switch (dimension) {
        case 'days':
            return `${difference / MILLISECONDS_PER_DAY} ${dimension}`;
            break;
        case 'hours':
            return `${difference / MILLISECONDS_PER_HOUR} ${dimension}`;
            break;
        case 'minutes':
            return `${difference / MILLISECONDS_PER_MINUTE} ${dimension}`;
            break;
        case 'seconds':
            return `${difference / MILLISECONDS_PER_SECONDS} ${dimension}`;
            break;
        default:
            return difference;
    }
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));


// 2. Масив унікальних значень
// Напишіть функцію яка відфільтрує масив унікальних значень
// Рішення має працювати незалежно від конкретних значень в масиві імен

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    let filteredUserNames = new Set(array);
    return [...filteredUserNames];
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];