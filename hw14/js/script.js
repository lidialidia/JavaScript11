"use strict";

// const
const TASKS_STORAGE_KEY = "tasks";

// DOM variables
const form = document.querySelector(".create-task-form");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-tasks");
const filterInput = document.querySelector(".filter-input");

// "storage" functions
const getTasksFromStorage = () => {
    return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY)) || [];
};

const storeTaskInStorage = (newTask, taskId) => {
    const tasks = getTasksFromStorage();
    tasks.push([newTask, taskId]);

    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const findElementInStorage = (tasks, key) => {
    const foundArray = tasks.find(subarray => subarray.includes(key));
    return foundArray;
}

const clearTasksFromStorage = () => {
  localStorage.removeItem(TASKS_STORAGE_KEY);
};

const removeTaskFromStorage = (key) => {
    const tasks = getTasksFromStorage();

    const deletedIndex = tasks.findIndex((task) => task[1] === key);
    tasks.splice(deletedIndex, 1);

    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const editTaskInStorage = (newTask, key) => {
    const tasks = getTasksFromStorage();

    tasks.forEach(task => {
        if(task[1] === key) {
            task[0] = newTask
        }
    })

    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function stripHtmlTags(input) {
    return input.replace(/<[^>]*>/g, '');
}

// "tasks" functions
const appendLi = (value, key) => {
    // Create and add LI element
    const li = document.createElement("li");
    li.setAttribute('data-key', key);
    // li.textContent = value; // Значення яке ввів користувач

    li.innerHTML = `<span class="collection__text">${stripHtmlTags(value)}</span><span class="collection__btns"><i class="fa fa-remove delete-item"></i> <i class="fa fa-edit edit-item"></i></span>`;
    taskList.append(li);
};

const addTask = (event) => {
    event.preventDefault();

    // Перевірка на пусте значення
    const value = taskInput.value.trim();
    if (value === "") {
        return;
    }

    const key = makeid(5);

    appendLi(value, key);
    // Зберігаємо елемент у localStorage
    storeTaskInStorage(value, key);

    // Очистити форму
    // 1 - скидає значення у input'a taskInput
    taskInput.value = "";
    // 2 - скидає всі значення форми
    // form.reset();

    // Фокусуємось на input
    taskInput.focus();

 
};

const clearTasks = () => {
  taskList.innerHTML = "";
  clearTasksFromStorage();
};

const removeTask = (event) => {
    const isDeleteButton = event.target.classList.contains("delete-item");
    if (!isDeleteButton) {
      return;
    }
  
    const isConfirmed = confirm("Ви впевнені що хочете видалити це завдання?");
    if (!isConfirmed) {
      return;
    }
  
    const li = event.target.closest("li");
    let liKey = li.getAttribute('data-key');
    li.remove();
  
    removeTaskFromStorage(liKey);
};

const editTask = (event) => {
    const isEditButton = event.target.classList.contains("edit-item");
    if (!isEditButton) {
        return;
    }

    const li = event.target.closest("li");
    let liKey = li.getAttribute('data-key');
    const newTask = prompt("Введіть нову назву задачі, будь ласка:");


    li.querySelector('.collection__text').innerHTML = `${newTask}`;
    editTaskInStorage(newTask, liKey)
}


const filterTasks = ({ target: { value } }) => {
  const text = value.toLowerCase();
  const list = taskList.querySelectorAll("li"); // []

  list.forEach((li) => {
    const liText = li.textContent.trim().toLowerCase();
    li.hidden = !liText.includes(text);
  });
};

const initTasks = () => {
  const tasks = getTasksFromStorage();
  tasks.forEach(task => {
    appendLi(task[0], task[1]);
  });
};

// Init
initTasks();

// Event listeners
// onsubmit
form.addEventListener("submit", addTask);

clearButton.addEventListener("click", clearTasks);

taskList.addEventListener("click", removeTask);

taskList.addEventListener("click", editTask);

filterInput.addEventListener("input", filterTasks);