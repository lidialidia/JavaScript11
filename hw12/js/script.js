"use strict"

// Задача на селектори
// Для сторінки напишіть селектори для наступних елементів:
// для елементу з текстом 'Навігація по DOM дереву'
// для першого елементу <section>
// для елементу списку з текстом 'Пункт 5'
// для елементу з класом 'hatredLevelBlock'

let navigationText = document.getElementById('headerTwo'),
    firstSection = document.querySelector('section'),
    listItemWithText = document.querySelector('li:nth-child(5)'),
    listItemWithClass = document.querySelector('.hatredLevelBlock');

console.log(navigationText);
console.log(firstSection);
console.log(listItemWithText);
console.log(listItemWithClass);