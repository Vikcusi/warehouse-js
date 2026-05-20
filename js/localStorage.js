import sortTable from "./sortTable.js";
import {getTrEl, getTbodyEl} from "./components.js"

export const tbodyEl = getTbodyEl();

// Функция отправки формы
export function handleFormSubmit(e, nameInput, shelfInput, weightInput, dataInput) {
    e.preventDefault();

    const record = {
        title: nameInput.value,
        shelf: shelfInput.value,
        weight: weightInput.value,
        data: dataInput.value,
    };

    addRecord(record);
    e.target.reset();
}

// Функция добавления записи
function addRecord(record) {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));
    renderTable();
}

// Функция рендера таблицы
export function renderTable() {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    tbodyEl.innerHTML = "";

    records.forEach((record, index) => {
        const rowEl = getTrEl(record.title, record.shelf, record.weight, record.data, index);
        tbodyEl.appendChild(rowEl);
    })

    const btnRemove = document.querySelectorAll('.btn-remove');

    btnRemove.forEach(button => {
        button.addEventListener('click', function () {
            const indexToRemove = this.getAttribute('data-index');
            removeRecord(indexToRemove);
        });
    })

    const btnSort = document.querySelectorAll('.btn-sort');
    btnSort.forEach(button => {
        button.onclick = function (e) {
            let th = e.target;
            sortTable(th.parentNode.cellIndex, th.parentNode.dataset.type);
        };
    });
}

//Функция удаления записи
function removeRecord(index) {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    records.splice(index, 1);
    localStorage.setItem('records', JSON.stringify(records));
    renderTable();
}