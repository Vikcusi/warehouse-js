import * as components from "./components.js";
import {renderTable, tbodyEl} from "./localStorage.js";
import navigate from "./navigate.js";

// Функция страницы с таблицей
export default function createMainStorage(conteinerEl) {
    const titleEl = components.getTitleEl("Склад");
    const buttonEl = components.getButtonEl("Добавить запись");

    buttonEl.addEventListener('click', function (e) {
        navigate("add");
    });

    const wrapBetweenEl = components.getWrapBetweenEl();
    wrapBetweenEl.append(titleEl, buttonEl);

    const tableEl = components.getTableEl();
    const theadEl = components.getTheadEl();

    tableEl.append(theadEl, tbodyEl);
    conteinerEl.append(wrapBetweenEl, tableEl);
    renderTable();
}