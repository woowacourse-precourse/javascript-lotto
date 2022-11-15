function DoubleCheckBonus(input, WinningNumber) {
  const includes = WinningNumber.split(',').includes(input);
  if (includes) {
    throw new Error('[ERROR] 중복되지 않는 숫자만 입력해주세요.');
  }
}

function checkBonusNumberRange(input) {
  if (Number(input) < 1 || Number(input) > 45) {
    throw new Error('[ERROR] 1~45의 숫자만 입력해 주세요.');
  }
}

function checkBonusValidation(input, WinningNumber) {
  DoubleCheckBonus(input, WinningNumber);
  checkBonusNumberRange(input);
  return true;
}

module.exports = checkBonusValidation;
