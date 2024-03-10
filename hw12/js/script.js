"use strict"

// Задача на селектори
// Для сторінки напишіть селектори для наступних елементів:
// для елементу з текстом 'Навігація по DOM дереву'
// для першого елементу <section>
// для елементу списку з текстом 'Пункт 5'
// для елементу з класом 'hatredLevelBlock'

let navigationText = Array.from(document.getElementsByTagName('*')).filter(element => element.textContent.includes('Навігація по DOM дереву')),
    firstSection = document.querySelector('section'),
    listItemWithText = Array.from(document.getElementsByTagName('li')).filter(item => item.textContent.includes('Пункт 5')),
    listItemWithClass = document.querySelector('.hatredLevelBlock');

console.log(navigationText);
console.log(firstSection);
console.log(listItemWithText);
console.log(listItemWithClass);