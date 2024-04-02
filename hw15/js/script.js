"use strict"

class Plants {
    constructor(name, height, homeland) {
        this.name = name;
        this.height = height;
        this.homeland = homeland;
    }

    grow() {
        this.height += 1;
        console.log(`Вітаю! ${this.name} тепер ${this.height} сантиметрів!`);
    }
}

class Trees extends Plants {
    constructor(name, height, homeland) {
        super(name, height, homeland);
        this.type = type;
    }

    harvest() {
        if (type === 'fruit') {
            console.log('Ми зібрали врожай!')
        }

        else 
    }
}


