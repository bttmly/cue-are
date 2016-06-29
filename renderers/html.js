function renderHtml (rows, options = {}) {
  const {
    blackCellClass = "qr-cell-black",
    whiteCellClass = "qr-cell-white",
    rowClass = "qr-row",
    render,
  } = options;

  // render function is provided here for server environments
  // that want to e.g. send back fully inline-styled html

  const BLACK = `<div class=${blackCellClass}></div>`;
  const WHITE = `<div class=${whiteCellClass}></div>`;

  function makeRow (cells) {
    return [
      `<div class=${rowClass}>`,
      ...cells.map(c => render ? render(c) : c ? BLACK : WHITE),
      `</div>`,
    ].join("");
  }

  return rows.map(makeRow).join("");
}

module.exports = renderHtml;
