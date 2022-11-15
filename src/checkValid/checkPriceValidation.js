function checkPriceUnits(input) {
  if (Number(input) % 1000 !== 0) {
    throw new Error('[ERROR] 1000원단위로 입력해주세요.');
  }
}
function checkPriceValidation() {
  checkPriceUnits();
}

module.exports = checkPriceValidation;
