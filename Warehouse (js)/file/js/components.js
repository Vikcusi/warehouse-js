// Получение елемента заголовка
function getTitleEl(text) {
    const titleEl = document.createElement("h1");
    titleEl.textContent = text;
    titleEl.classList.add("title");
    return titleEl;
}

// Получение элемента кнопки 
function getButtonEl(text) {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = text;
    buttonEl.classList.add("button");
    return buttonEl;
}

// Получение элемента таблицы
function getTableEl() {
    const tableEl = document.createElement("table");
    tableEl.classList.add("table");
    return tableEl;
}

// Получение элемента заголовка таблицы
function getTheadEl() {
    const theadEl = document.createElement("thead");
    const trEl = document.createElement("tr");
    trEl.innerHTML = `
      <th class="table-name" data-type="string"><button class="btn-sort">Название</button></th>
      <th class="table-name" data-type="string"><button class="btn-sort">Полка</button></th>
      <th class="table-name" data-type="number"><button class="btn-sort">Вес</button></th>
      <th class="table-name" data-type="date"><button class="btn-sort">Время хранения</button></th>
      <th></th>
    `;
    theadEl.appendChild(trEl);
    return theadEl;
}

//Получение элемента тела таблицы
function getTbodyEl() {
    const tbodyEl = document.createElement("tbody");
    tbodyEl.classList.add("tbody");
    return tbodyEl;
}

function getTrEl(title, shelf, weight, data, indexRemove) {
    const row = document.createElement("tr");
    row.classList.add('row');
    row.innerHTML = `
      <td>${title}</td>
      <td>${shelf}</td>
      <td>${weight}</td>
      <td>${data}</td>
      <td><button class="btn-remove" data-index="${indexRemove}">Удалить</button></td>
    `;
    return row;
}

// Получение элемента блока для выравнивания по бокам
function getWrapBetweenEl() {
    const wrapBetweenEl = document.createElement("div");
    wrapBetweenEl.classList.add("wrapper-between");
    return wrapBetweenEl;
}

//Получение элемента формы
function getFormEl() {
    const formEl = document.createElement("form");
    formEl.classList.add("form");
    formEl.id = 'form'
    return formEl;
}

//Получение элемента текстого поля
function getInputEl(type, name, placeholder) {
    const inputEl = document.createElement("input");
    inputEl.type = type;
    inputEl.name = name;
    inputEl.placeholder = placeholder;
    inputEl.required = true;;
    inputEl.classList.add("input");
    return inputEl;
}

//Получение элемента кнопки для регистрации записи
function getRegButtonEl(text) {
    const regButtonEl = document.createElement("button");
    regButtonEl.textContent = text;
    regButtonEl.classList.add("reg-button");
    return regButtonEl;
}

//Получение элемента лоудера
function getLoaderEl() {
    const loaderEl = document.createElement("div");
    loaderEl.classList.add("loader");
    return loaderEl;
}

export {
    getTitleEl,
    getButtonEl,
    getTableEl,
    getTheadEl,
    getTrEl,
    getWrapBetweenEl,
    getFormEl,
    getInputEl,
    getRegButtonEl,
    getTbodyEl,
    getLoaderEl
}