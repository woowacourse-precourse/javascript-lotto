function checkPriceUnits(input) {
  if (Number(input) % 1000 !== 0) {
    throw new Error('[ERROR] 1000원단위로 입력해주세요.');
  }
}
function checkPriceDataType(input) {
  if (/[^(0-9)]/gi.test(input)) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }
}
function checkPriceValidation() {
  checkPriceDataType();
  checkPriceUnits();
}

module.exports = checkPriceValidation;
