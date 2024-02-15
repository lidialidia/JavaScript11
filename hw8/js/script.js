"use strict"

// 1. Напишіть функцію addThemAll
// Вона буде знаходити суму усіх своїх аргументів незалежно від їх кількості (але без використання вбудованого об'єкту Math).
// Використайте оператор розширення

const addThemAll = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

// 2. Задача на використання замикання. 
// Напишіть функцію яка працює таким чином: multiply(a)(b)  // a * b

const multiply = (a) => (b) => a * b;

console.log(multiply(5)(5))	// 25
console.log(multiply(2)(-2)) // -4
console.log(multiply(4)(3))	// 12