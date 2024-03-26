"use strict"

const LOCAL_STORAGE_CURRENT_STATE = 'current_state';
const LOCAL_STORAGE_LAST_STATE = 'last_state';
const LOCAL_STORAGE_LAST_DATE = 'last_date';
const TEXT_TURN_ON = 'turn on';
const TEXT_TURN_OFF = 'turn off';

const switchButton = document.querySelector('.switch');

// changes on click
const getDateOfLastChange = () => {
    let currentDate = new Date(),
        day = String(currentDate.getDate()),
        month = String(currentDate.getMonth() + 1),
        hours = String(currentDate.getHours()),
        minutes = String(currentDate.getMinutes()),
        seconds = String(currentDate.getSeconds());

    month = month.length < 2 ? `0${month}` : month;
    day = day.length < 2 ? `0${day}` : day;
    hours = hours.length < 2 ? `0${hours}` : hours;
    minutes = minutes.length < 2 ? `0${minutes}` : minutes;
    seconds = seconds.length < 2 ? `0${seconds}` : seconds;
    
    return `${day}-${month}-${currentDate.getFullYear()} ${hours}:${minutes}:${seconds}`
}

const appendParagraph = (text) => {
    if (!document.querySelector('.info')) {
        let infoBlock = document.createElement('div');
        infoBlock.classList.add('info');
        document.querySelector('.wrapper').append(infoBlock);
    }
    document.querySelector('.info').innerHTML = `<p>${text}</p>`;
}

const switchColorAndText = (event) => {
    let button =  event.target;
    const lastState = button.textContent.toLowerCase();
    let currentState = lastState === TEXT_TURN_OFF ? TEXT_TURN_ON : TEXT_TURN_OFF;

    button.textContent = currentState;
    appendParagraph(`Last ${lastState} at ${getDateOfLastChange()}`);
    document.querySelector('.wrapper').classList.toggle('dark');

    localStorage.setItem(LOCAL_STORAGE_CURRENT_STATE, currentState);
    localStorage.setItem(LOCAL_STORAGE_LAST_STATE, lastState);
    localStorage.setItem(LOCAL_STORAGE_LAST_DATE, getDateOfLastChange());
}

const initTheme = () => {
    const currentState = localStorage.getItem(LOCAL_STORAGE_CURRENT_STATE);
    const lastState = localStorage.getItem(LOCAL_STORAGE_LAST_STATE);
    const lastDate = localStorage.getItem(LOCAL_STORAGE_LAST_DATE);
    
    if(currentState && lastState && lastDate) {
        appendParagraph(`Last ${lastState} at ${lastDate}`);
        switchButton.textContent = currentState;

        if (currentState === TEXT_TURN_ON) {
            document.querySelector('.wrapper').classList.add('dark');
        }
    }
}

initTheme()

switchButton.addEventListener("click", switchColorAndText);
