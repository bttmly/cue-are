const qr = require("../");

function renderHtml (value, options = {}) {
  const {
    blackCellClass = "qr-cell-black",
    whiteCellClass = "qr-cell-white",
    rowClass = "qr-row",
  } = options;

  const BLACK = `<div class=${blackCellClass}></div>`;
  const WHITE = `<div class=${whiteCellClass}></div>`;

  function makeRow (cells) {
    return [
      `<div class=${rowClass}>`,
      ...cells.map(c => c ? BLACK : WHITE),
      `</div>`,
    ].join("");
  }

  return qr(value).map(makeRow).join("");
}

module.exports = renderHtml;
