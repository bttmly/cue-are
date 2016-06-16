const qr = require("..");

function renderDom (value, options = {}) {
  const {
    blackCellClass = "qr-cell-black",
    whiteCellClass = "qr-cell-white",
    rowClass = "qr-row",
  } = options;

  const container = document.createElement("div");

  function makeRow () {
    var row = document.createElement("div");
    row.classList.add(rowClass);
    return row;
  }

  function makeCell (v) {
    var cell = document.createElement("div");
    cell.classList.add(v ? blackCellClass : whiteCellClass);
    return cell;
  }

  qr(value).forEach(function (row) {
    var rowDiv = makeRow();
    container.appendChild(rowDiv);
    row.forEach(function (cell) {
      rowDiv.appendChild(makeCell(cell));
    });
  }

  return container;
}