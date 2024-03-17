"use strict"

const CHANGES_STORAGE_KEY = "changes";

const switchButton = document.querySelector('.switch');

// localStorage

const getChangesFromStorage = () => {
    return JSON.parse(localStorage.getItem(CHANGES_STORAGE_KEY)) || [];
};
  
const storeChangesInStorage = (newChange) => {
    const change = getChangesFromStorage();
    change.push(newChange);
  
    localStorage.setItem(CHANGES_STORAGE_KEY, JSON.stringify(change));
};

// changes on click
const getDateOfLastChange = () => {
    let currentDate = new Date();
    return `Last ${switchButton.textContent}: ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
}

const appendP = (text) => {
    if (!document.querySelector('.info')) {
        let infoBlock = document.createElement('div');
        infoBlock.classList.add('info');
        document.querySelector('.wrapper').append(infoBlock);
    }
    let item = document.createElement('p');
    item.innerHTML = text;
    document.querySelector('.info').append(item);
}

const switchColorAndText = (event) => {
    let button =  event.target;
    button.classList.toggle('dark');
    button.closest('.wrapper').classList.toggle('dark');
    if (button.textContent.toLowerCase() === 'turn off' ) {
        button.textContent = 'turn on';
    }
    else {
        button.textContent = 'turn off';
    }

    const text = getDateOfLastChange();
    appendP(text);
    
    storeChangesInStorage(text);
}

const initTasks = () => {
    const changes = getChangesFromStorage();
    changes.forEach(appendP);
};
  
// Init
initTasks();

switchButton.addEventListener("click", switchColorAndText);
