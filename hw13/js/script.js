"use strict"

const LOCAL_STORAGE_NEW_STATE = 'current_state';
const LOCAL_STORAGE_LAST_DATE = 'last_date';

const TEXT = 'turn'

const STATE_ON = 'on';
const STATE_OFF = 'off';

const TEXT_ON = `${TEXT} ${STATE_ON}`;
const TEXT_OFF = `${TEXT} ${STATE_OFF}`;

const switchButton = document.querySelector('.switch');

const format = (element) => element.length < 2 ? `0${element}` : element

const getNewState = (state) => state === STATE_ON ? STATE_OFF : STATE_ON

const getText = (state) => `${TEXT} ${state}`

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
    const button =  event.target;

    const lastText = button.textContent.toLowerCase();
    const newState = getNewState(localStorage.getItem(LOCAL_STORAGE_NEW_STATE) || STATE_ON);

    button.textContent = getText(newState);

    appendParagraph(`Last ${lastText} at ${getDateOfLastChange()}`);
    document.querySelector('.wrapper').classList.toggle('dark');

    localStorage.setItem(LOCAL_STORAGE_NEW_STATE, newState);
    localStorage.setItem(LOCAL_STORAGE_LAST_DATE, getDateOfLastChange());
}

const initTheme = () => {
    const state = localStorage.getItem(LOCAL_STORAGE_NEW_STATE);
    const lastDate = localStorage.getItem(LOCAL_STORAGE_LAST_DATE);
    
    if(state && lastDate) {
        const text = getText(state);
        const lastText = getText(getNewState(state));

        appendParagraph(`Last ${lastText} at ${lastDate}`);
        switchButton.textContent = text;

        if (state === STATE_ON) {
            document.querySelector('.wrapper').classList.add('dark');
        }
    } else {
        switchButton.textContent = TEXT_OFF;
    }
}

initTheme()

switchButton.addEventListener("click", switchColorAndText);
