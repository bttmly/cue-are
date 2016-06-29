const qr = require("../");

const BLACK = "\033[40m  \033[0m";
const WHITE = "\033[47m  \033[0m";

function renderTerminal (value) {
  return qr(value).map(function (row) {
    return row.map(c => c ? BLACK : WHITE).join("");
  }).join("\n");
}

module.exports = renderTerminal;