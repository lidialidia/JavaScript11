"use strict"

// task 1
// Напишіть код який бере значення від користувача (prompt) і виводить у консоль всі парні числа, що менші за задане. Наприклад, якщо користувач ввів число 10, програма має вивести наступне: 2, 4, 6, 8. Додаткові вимоги:
// Реалізуйте рішення 2 способами: з використанням циклу for та while
// Код має перевіряти, чи значення у змінній є числом. Якщо воно не є числом, програма має вивести повідомлення про помилку.

let num = prompt('Enter number:');

if (isNaN(num)) {
    console.log('Not a number');
} else {
    // first method
    for( let i = 2; i < num; i += 2) {
        console.log(i);
    }

    // second method
    let a = 0;
    while (a + 2 < num ) {
        a += 2;
        console.log(a);
    }
}

// task 2
// Напишіть код який виводить в консоль значення від 1 до 100, але замість чисел кратних 3 має виводитись Fizz, замість значень кратних 5 - Buzz, а замість значень кратних і 3 і 5 - FizzBuzz.

for( let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// task 3
// Маючи рядок цифр, ви повинні замінити будь-яку цифру нижче 5 на «0», а будь-яку цифру 5 і вище на «1».

let string = '42559125';
let result = '';

for (let i = 0; i < string.length; i++) {
    switch(string[i] < 5) {
        case true:
            result += '0';
            break;
        default:
            result += '1'; 
    }
}

console.log(result);
