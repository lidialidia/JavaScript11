"use strict"

// 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval  
// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'


function detonatorTimerFirst(delay) {
    let detonatorTimer = setInterval(function() {
        console.log(delay);
        delay--;
        if (delay === 0) {
            console.log('BOOM!');
            clearInterval(detonatorTimer);
        }
    }, 1000);
}

detonatorTimerFirst(3);
// 3
// 2
// 1
// BOOM!


// 2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  

// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'

function detonatorTimerSecond(delay) {

  function detonator() {

    console.log(delay);
    delay--;

    if (delay === 0) {
        console.log('BOOM!');
        return;
    }

    setTimeout(detonator, delay);
  }

  detonator();
}

detonatorTimerSecond(3);

// 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 

const me = {
	name: 'Lida',
	residency: 'Lviv',
	gender: 'female',
	age: 25,
    pet: 'pug',
    petName: 'Ferdinand',
	hobby: 'reading',
	lastBook: 'Greenlights',
	currentBook: 'Heaven Has No Favorites',
	introduce() {
		console.log(`My name is ${this.name} and I live in ${this.residency} for half a year.`);
	},
	petInfo() {
		console.log(`When I was ${this.age-3} I decided to buy a pet. It is a ${this.pet} and his name is ${this.petName}.`);
	},
	describeMyHobby(){
		console.log(`I like ${this.hobby}, and my last book was "${this.lastBook}", but now I'm reading "${this.currentBook}"`);
	}
}

me.introduce();
me.petInfo();
me.describeMyHobby();

// 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
// Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPetInfo = me.petInfo.bind(me);
let securedSelfDescribeMyHobby = me.describeMyHobby.bind(me);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPetInfo, 2000); // виведе коректний результат
setTimeout(securedSelfDescribeMyHobby, 3000); // виведе коректний результат

