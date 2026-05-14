import {getLoaderEl} from "./components.js";

// Функция навигации
export default async function navigate(pageName) {
    const appEl = document.getElementById('app');
    appEl.innerHTML = '';

    const loader = getLoaderEl();
    appEl.append(loader);

    switch (pageName) {
        case "main":
            const mainStorage = await import ("./mainStorage.js"); 
            mainStorage.default(appEl);
            loader.remove();
            break;
        case "add":
            const recordRegistration = await import ("./recordRegistration.js"); 
            recordRegistration.default(appEl);
            loader.remove();
            break;
    }
}