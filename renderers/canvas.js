function renderCanvas (rows, options = {}) {

  const { 
    cellSize = 10, 
    margin = 20 
  } = options;

  const canvas = document.createElement("canvas");
  const size = rows.length * cellSize + 2 * margin;

  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, size, size);
  
  ctx.fillStyle = "#000000";
  rows.forEach(function (row, i) {
    row.forEach(function (cell, j) {
      if (cell) {
        ctx.fillRect(
          i * cellSize,
          j * cellSize,
          cellSize,
          cellSize
        );
      }
    });
  });

  return canvas;
}

module.exports = renderCanvas;
