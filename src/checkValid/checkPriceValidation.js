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
function checkPriceZero(input) {
  if (input === undefined || input === null || input === '' || input === 0) {
    throw new Error('[ERROR] 공백 및 0은 입력할 수 없습니다.');
  }
}
function checkPriceValidation(input) {
  checkPriceZero(input);
  checkPriceDataType(input);
  checkPriceUnits(input);
}

module.exports = checkPriceValidation;
