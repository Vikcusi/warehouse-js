//Функция сортировки
export default function sortTable(colNum, type) {
    const tbody = document.querySelector('.tbody');
    const rowsArray = Array.from(tbody.rows);
    let compare;

    switch (type) {
        case "number":
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            }
            break;
        case "string":
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            }
            break;
        case "date":
            compare = function (rowA, rowB) {
                const dateA = new Date(rowA.cells[colNum].innerHTML);
                const dateB = new Date(rowB.cells[colNum].innerHTML);
                return dateA - dateB;
            };
            break;
    }

    rowsArray.sort(compare);
    tbody.append(...rowsArray);
}