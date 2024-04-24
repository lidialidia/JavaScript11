"use strict"

class Plants {
    constructor(name, height, age = 0) {
        this.name = name;
        this.height = height;
        this.age = age;
    }

    plant() {
       console.log(`Привіт! ${this.name} - саджанець, поки що має ${this.age} років`) 
    }

    grow() {
        this.height += 1;
        this.age += .5;
        console.log(`Ура! ${this.name} тепер ${this.height} сантиметрів і має ${this.age} років!`);
    }

    fall() {
        console.log(`На жаль, час настав, ${this.name} помирає. Бувай!`)
    }

}

class Trees extends Plants {
    constructor(name, height, age, homeland) {
        super(name, height, age);
        this.homeland = homeland;
    }

    move() {
        this.homeland = prompt("Введіть, будь ласка, де поточне місце існування:");
        console.log(`Зараз ${this.name} росте ${this.homeland}`);
    }
    
}

class Coniferous extends Trees {
    constructor(name, height, age, homeland, coneSize) {
        super(name, height, age, homeland);
        this.coneSize = coneSize;
    }

    windShakes() {
        console.log(`Вітер хитає ${this.name}`);
        this.#coneFall();
    }

    #coneFall() {
        console.log("Впала шишка:(");
    }
}

class Deciduous extends Trees {
    #harvest;

    constructor(name, height, age, homeland, leavesAmount) {
        super(name, height, age, homeland);
        this.leavesAmount = leavesAmount;
    }

    getHarvest(type) {
        if (type === "garden stuffs") {
          console.log(this.#harvest);
        }
    }

    loseLeaves() {
        this.leavesAmount = 0;
        console.log(`Прийшла зима. На ${this.name} залишилось ${this.leavesAmount} листочків.`);
    }
}

const spruce = new Coniferous('Смерека', 5, 2, 'Далекий Схід', 14);
const fig = new Deciduous('Інжир', 1.5, 3, 'Мала Азія', 345);

