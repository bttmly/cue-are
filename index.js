const QrCode = require("./vendor/QRCode");

const DEFAULT_ECL = 1
const DEFAULT_TN = -1;

function generate (input, tn = DEFAULT_TN, ecl = DEFAULT_ECL) {
  const qr = new QrCode(tn, ecl);
  qr.addData(input);
  qr.make();
  return qr.modules.map(line => line.map(Number));
}

module.exports = generate;
