"use strict"

const LOCAL_STORAGE_LAST_STATE = 'last_state';
const LOCAL_STORAGE_LAST_DATE = 'last_date';
const TEXT_TURN_ON = 'turn on';
const TEXT_TURN_OFF = 'turn off';

const switchButton = document.querySelector('.switch');

const format = (element) => element.length < 2 ? `0${element}` : element

const getCurrentState = (lastState) => lastState === TEXT_TURN_OFF ? TEXT_TURN_ON : TEXT_TURN_OFF

// changes on click
const getDateOfLastChange = () => {
    let currentDate = new Date(),
        day = format(String(currentDate.getDate())),
        month = format(String(currentDate.getMonth() + 1)),
        hours = format(String(currentDate.getHours())),
        minutes = format(String(currentDate.getMinutes())),
        seconds = format(String(currentDate.getSeconds()));


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

    button.textContent = getCurrentState(lastState);
    appendParagraph(`Last ${lastState} at ${getDateOfLastChange()}`);
    document.querySelector('.wrapper').classList.toggle('dark');

    localStorage.setItem(LOCAL_STORAGE_LAST_STATE, lastState);
    localStorage.setItem(LOCAL_STORAGE_LAST_DATE, getDateOfLastChange());
}

const initTheme = () => {
    const lastState = localStorage.getItem(LOCAL_STORAGE_LAST_STATE);
    const lastDate = localStorage.getItem(LOCAL_STORAGE_LAST_DATE);
    
    if(lastState && lastDate) {
        const currentState = getCurrentState(lastState);

        appendParagraph(`Last ${lastState} at ${lastDate}`);
        switchButton.textContent = currentState;

        if (currentState === TEXT_TURN_ON) {
            document.querySelector('.wrapper').classList.add('dark');
        }
    }
}

initTheme()

switchButton.addEventListener("click", switchColorAndText);
