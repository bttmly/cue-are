const qr = require("..");

const BLACK = "\033[40m  \033[0m";
const WHITE = "\033[47m  \033[0m";

function drawTerminal (str) {
  const rows = qr(str);

  const renderedRows = rows.map(function (row) {
    return row.map(c => c ? BLACK : WHITE).join("");
  });

  return renderedRows.join("\n");
}

module.exports = drawTerminal;
