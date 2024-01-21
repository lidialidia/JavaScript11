"use strict"

// task 1

let item = '59';

console.log(`Number: ${Number(item)}; String: ${String(item)}; Boolean: ${Boolean(item)}`);

// task 2

let rate = 37.42,
    enteredNumbers = prompt('Enter how much hryvnias do you want to convert:'),
    result = +(enteredNumbers / rate).toFixed(2);
console.log(result);

// task 3

let liters = prompt('Enter number of liters:'),
    price = prompt('Enter price:'),
    cost = +(liters * price).toFixed(3);
console.log(cost);

// task 4

let a = 65,
    b = 17,
    binaryResult = Number(a + b).toString(2);

console.log(binaryResult);