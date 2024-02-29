"use strict"

// 1. Задача про обчислення різниці часу
// Напишіть функцію яка буде буде приймати 3 параметри
// — початкову дату (string)
// — кінцеву дату (string)
// — розмірність ('days',  'hours', 'minutes', 'seconds')
// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

function differenceBetweenTwoNumbers(a, b) {
    return a > b ? a - b : b - a;
}

function durationBetweenDates(firstDate, secondDate, dimension) {
    let firstDateTimestamp = new Date(firstDate).getTime();
    let secondDateTimestamp = new Date(secondDate).getTime();

    let difference = differenceBetweenTwoNumbers(firstDateTimestamp, secondDateTimestamp);

    const MILLISECONDS_PER_DAY = 86400000;
    const MILLISECONDS_PER_HOUR = 3600000;
    const MILLISECONDS_PER_MINUTE = 60000;
    const MILLISECONDS_PER_SECONDS = 1000;

    switch (dimension) {
        case 'days':
            return difference / MILLISECONDS_PER_DAY + ' days';
            break;
        case 'hours':
            return difference / MILLISECONDS_PER_HOUR + ' hours';
            break;
        case 'minutes':
            return difference / MILLISECONDS_PER_MINUTE + ' minutes';
            break;
        case 'seconds':
            return difference / MILLISECONDS_PER_SECONDS + ' seconds';
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
    return new Set(array);
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];