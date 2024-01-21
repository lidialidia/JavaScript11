"use strict"

// task 1
// Створіть змінну довільного типу. Проведіть наступні перетворення з нею:
// a. перетворіть її на рядок
// b. перетворіть її на число
// c. перетворіть її на булеве значення
// Результат виконання кожного перетворення вивести через console.log

let item = '59';

console.log(`Number: ${Number(item)}; String: ${String(item)}; Boolean: ${Boolean(item)}`);

// task 2
// Написати програму, яка конвертує гривні (UAH) в долари (USD). Спочатку задайте змінну rate, яка буде відображати поточний курс долара до гривні. Потім отримайте від користувача суму гривень (можна використати prompt який розбирали на занятті), яку він хоче конвертувати, і виведіть відповідний результат у доларах в консоль.

let rate = 37.42,
    enteredNumbers = prompt('Enter how much hryvnias do you want to convert:'),
    result = +(enteredNumbers / rate).toFixed(2);
console.log(result);

// task 3
// Користувач вводить кількість літрів бензину, яку він хоче купити, та ціну за літр. Програма обчислює вартість та виводить суму, округлену до сотих.

let liters = prompt('Enter number of liters:'),
    price = prompt('Enter price:'),
    cost = +(liters * price).toFixed(3);
console.log(cost);

// task 4
// Напишіть змінну binaryResult яка представляє з себе суму двох чисел у бінарному вигляді. Це бінарне число має повертатись з типом string

let a = 65,
    b = 17,
    binaryResult = Number(a + b).toString(2);

console.log(binaryResult);