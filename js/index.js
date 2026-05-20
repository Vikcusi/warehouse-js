import navigate from "./navigate.js";
import {renderTable} from "./localStorage.js";

renderTable();

document.addEventListener('DOMContentLoaded', function () {
    navigate("main");
});
