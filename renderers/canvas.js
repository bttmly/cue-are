const qr = require("../");

function renderCanvas (value, options = {}) {

  const { cellSize = 4, margin = 8 } = options;

  const rows = qr(value);

  const canvas = document.createElement("canvas");
  const size = rows * cellSize;
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#000000";

  rows.forEach(function (row, i) {
    row.forEach(function (cell, j) {
      if (!cell) return;
      ctx.fillRect(
        i * cellSize,
        j * cellSize,
        cellSize,
        cellSize
      );
    });
  });

  return canvas;
}

module.exports = renderCanvas;
