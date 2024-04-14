export const period = () => {
    const dateInputs = document.querySelector('.period__inputs');
    const preset = document.querySelector('.period__items_preset');
    const days = document.querySelectorAll('.period__items_days .period__input');
    const startDate = document.querySelector('#startDate');
    const endDate = document.querySelector('#endDate');
    const dimension = document.querySelectorAll('.period__items_dimension .period__input');
    const count = document.querySelector('.period__btn_count');
    const reset = document.querySelector('.period__btn_reset');
    const resultTable = document.querySelector('.period__table');
    

    // це я винесла, бо код дублювався
    const selectDate = (input, value) => {
        let startDateValue = new Date(input.value);
        startDateValue.setDate(startDateValue.getDate() + value);
        return startDateValue.toISOString().split('T')[0];
    }
    
    // тут я перевіряю яке поле обрано перший, і в залежності від того перше чи друге - задаю мінімальне чи максимальне значення іншому полю
    const onChangeDate = (event) => {
        const input = event.target;
    
        if(input === startDate) {
            endDate.min = selectDate(input, 1)
        } else if(input === endDate) {
            startDate.max = selectDate(input, -1)
        }
    }

    // тут я роблю пресет, обираю тиждень або місяць, але якщо користувач не обрав нічого, то за початкову дату - беру сьогодні
    const selectPreset = (value) => {
        if (startDate.value !== '') {
            endDate.value = selectDate(startDate, value);
        }
        else if (endDate.value !== '') {
            startDate.value = selectDate(endDate, -value);
        }
        else {
            const today = new Date();
            startDate.value = today.toISOString().split('T')[0];
            endDate.value = selectDate(startDate, value);
        }
    }


    // тут в залежності від того, на яку кнопку клікнув користувач додаю дата атрибут, він мені знадобиться нижче, коди я хочу в таблицю додату інформацію про пресет, який обрав користувач; а ще задаю час проміжок часу
    const onChangePreset = (event) => {
        event.preventDefault();
        const element = event.target;

        preset.querySelectorAll('.period__btn_preset').forEach(item => {
            if(element !== item) {
                item.removeAttribute('data-state');
            }
        })
        element.setAttribute('data-state', 'selected');
        let presetValue = element.getAttribute('data-value');

        if (presetValue === 'week') {
            selectPreset(7);
        }

        if (presetValue === 'month') {
            selectPreset(30);
        }

    }

    // далі три функції де я шукаю дні в заданому проміжку, можливо тут варто якось скоротити цей код, але я не придумала як, тому залишила 3 окремі функції, де перша - будні
    function getWeekdaysBetween(firstDate, lastDate) {
        let result = 0;
        let currentDate = new Date(firstDate);
      
        while (currentDate <= lastDate) {
          if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            result++;
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
      
        return result;
    }

    // тут вихідні
    function getWeekendsBetween(firstDate, lastDate) {
        let result = 0;
        let currentDate = new Date(firstDate);
      
        while (currentDate <= lastDate) {
          if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            result++;
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
      
        return result;
    }

    // а тут всі дні в проміжку, але є у мене підозра, що тут треба переробити, бо будні і вихідні у мене рахує включно перший і останній день, а тут - ні
    function getAllDaysBetween(firstDate, lastDate) {
        let firstDate1 = new Date(firstDate);
        let lastDate1 = new Date(lastDate);
      
        let result = (lastDate1 - firstDate1) / 1000 / 60 / 60 / 24;
      
        return result;
    }

    // тут я вже викликаю ті функції, коли користувач обрав якийсь із радіо баттонів
    const onCheckDaysType = () => {
        let daysType;

        days.forEach(item => {
            if(item.checked === true) {
                daysType = item.value;
            }
        })

        console.log(daysType);

        let startDateValue = new Date(startDate.value),
        endDateValue = new Date(endDate.value);

        if (daysType === 'weekdays') {
            return getWeekdaysBetween(startDateValue, endDateValue);
        }

        else if (daysType === 'weekends') {
            return getWeekendsBetween(startDateValue, endDateValue);
        }

        else {
            return getAllDaysBetween(startDateValue, endDateValue);
        }

    }

    // ця функція обчислює скільки хвилин, годин і т.д. в проміжку, що обрав користувач і всі результати (бо я робила це як чекбокс, дала можливість обрати всі варіанти) додаю в масив, а потім то все виведу в таблицю
    const countResult = () => {

        let daysAmount = onCheckDaysType();
        let result = [];

        dimension.forEach(item => {
            if(item.checked === true) {
                if (item.value === 'days') {
                    result.push('Дні: ' + daysAmount);
                }
                else if (item.value === 'hours') {
                    result.push('Години: ' + daysAmount * 24);
                }
                else if (item.value === 'minutes') {
                    result.push('Хвилини: ' + daysAmount * 1440);
                }
                else if (item.value === 'seconds') {
                    result.push('Секунди: ' + daysAmount * 86400);
                }
            }
        })

        if (!result.length) {
            return 'Оберіть щось';
        }

        return result;
        
    }

    // ця функція у мене працює при кліку на кнопку "Порахувати", вона виводить таблицю результатів (в результати я виводжу все, що обрав користувач), але у мене виводиться лише один варіант, останній, тобто я щоразу перезаписую таблицю
    const showResult = (event) => {

        event.preventDefault();

        if(startDate.value === '' && endDate.value === '') {
            return resultTable.innerHTML = '<p class="error">Будь ласка, оберіть початкову та кінцеву дати вище, щоб продовжити. Ваш вибір надасть нам змогу порахувати проміжок часу між цими датами.</p>';
        }

        let presetInfo = document.querySelectorAll('.period__btn_preset');
        let days = document.querySelectorAll('.period__items_days .period__input');
        let dayType;
        let presetType;
        let countResultValue = countResult();
        let countResultMarkup;
        
        if(Array.isArray(countResultValue)) {
            countResultMarkup = `
                <div>
                    ${countResultValue.map(item => {
                        return `<div>${item}</div>`
                    }).join(' ')}
                </div>
            `
        }
        else {
            countResultMarkup = countResultValue
        }

        days.forEach(item => {
            if(item.checked === true) {
                dayType = item.parentElement.textContent;
            }
        })

        presetInfo.forEach(item => {
            if(item.hasAttribute('data-state')) {
                presetType = item;
            }
        })

        if (presetType) {
            resultTable.innerHTML = `
            <div class="table">
                <div class="thead">
                    <div class="tr">
                        <div class="th">Початкова дата</div>
                        <div class="th">Кінцева дата</div>
                        <div class="th">Режим</div>
                        <div class="th">Міра</div>
                        <div class="th">Результат</div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr">
                        <div class="td">${startDate.value}</div>
                        <div class="td">${endDate.value}</div>
                        <div class="td">${presetType.textContent}</div>
                        <div class="td">${dayType}</div>
                        <div class="td">${countResultMarkup}</div>
                    </div>
                </div>
            </div>
        `
        }

        else {
            resultTable.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Початкова дата</th>
                            <th scope="col">Кінцева дата</th>
                            <th scope="col">Міра</th>
                            <th scope="col">Результат</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${startDate.value}</td>
                            <td>${endDate.value}</td>
                            <td>${dayType}</td>
                            <td>${dimensionType}</td>
                        </tr>
                    </tbody>
                </table>
            `
        }

    }


    // тут все просто, я просто очищаю форму, щоб можна було все заново ввести
    const resetForm = (event) => {
        event.preventDefault();
        document.querySelector('.period__form').reset();
    }
    
    dateInputs.addEventListener('input', (event) => onChangeDate(event));
    preset.addEventListener('click', (event) => onChangePreset(event));
    count.addEventListener('click', (event) => showResult(event));
    reset.addEventListener('click', (event) => resetForm(event));
}
