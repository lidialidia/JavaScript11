"use strict"

// 1. Задача про ітерацію
// Напишіть функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function iterativeOddSumTo(number) {
    let sum = 0;

    for (let i = 1; i <= number; i+=2) {
        sum += i;
    }

    return sum;
};
    
console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(9)) // 25
console.log(iterativeOddSumTo(10)) // 25

// 2. Задача про рекурсію 
// Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function recursiveOddSumTo(number) {

    if (number === 1) {
        return 1;
    }
    
    if (number % 2 === 1) {
        return number + recursiveOddSumTo(number - 2);
    }

    return recursiveOddSumTo(number - 1);
    
};
  
console.log(recursiveOddSumTo(1))
console.log(recursiveOddSumTo(9))
console.log(recursiveOddSumTo(10))

// 3. Додаткова задача*
// Напишіть стрілочну функцію isXOEqual яка перевіряє чи рядок має однакову кількість символів «x» та «o». Функція повинна повертати логічне значення та бути нечутливою до регістру. Рядок може містити будь-які символи.

const isXOEqual = (str) => {

    let xAmount = 0,
        oAmount = 0;

    for (let i = 0; i < str.length; i++ ) {
        const char = str[i].toLowerCase();
        if (char === 'o') {
            oAmount++;
        } else if (char === 'x') {
            xAmount++;
        }
    }

    return oAmount === xAmount;
}

console.log(isXOEqual("ooxx")) // true
console.log(isXOEqual("xooxx")) // false
console.log(isXOEqual("ooxXm")) // true
console.log(isXOEqual("zpzpzpp")) // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isXOEqual("zzoo")) // false