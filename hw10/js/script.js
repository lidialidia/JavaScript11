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
    startDate = new Date('02 Aug 1985');
    endDate = new Date('03 Aug 1985');

    
    if (dimension === 'days' ) {
        const start = startDate.getDate(),
          end = endDate.getDate();
        return end - start
    }
    if (dimension === 'seconds') {
        const start = startDate.getTime(),
              end = endDate.getTime();
        return end - start;
    }
    return endDate;
}
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));
