import * as components from "./components.js";
import {handleFormSubmit} from "./localStorage.js";
import navigate from "./navigate.js";


// Функция страницы регистрации
export default function createRecordRegistration(conteinerEl) {
    const titleEl = components.getTitleEl("Добавить запись");

    const formEl = components.getFormEl();

    const nameInput = components.getInputEl("text", "title", "Название");
    const shelfInput = components.getInputEl("text", "shelf", "Полка");
    const weightInput = components.getInputEl("text", "weight", "Вес");
    const dataInput = components.getInputEl("date", "date", "дд.мм.гггг");

    const regButtonEl = components.getRegButtonEl("Добавить запись");

    formEl.append(nameInput, shelfInput, weightInput, dataInput, regButtonEl);
    conteinerEl.append(titleEl, formEl);

    formEl.addEventListener('submit', function (e) {
        handleFormSubmit(e, nameInput, shelfInput, weightInput, dataInput);
        navigate("main");
    });
}