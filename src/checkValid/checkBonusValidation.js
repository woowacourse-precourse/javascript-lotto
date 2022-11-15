function DoubleCheckBonus(input, WinningNumber) {
  const includes = WinningNumber.split(',').includes(input);
  if (includes) {
    throw new Error('[ERROR] 중복되지 않는 숫자만 입력해주세요.');
  }
}

function checkBonusValidation(input, WinningNumber) {
  DoubleCheckBonus(input, WinningNumber);
  return true;
}

module.exports = checkBonusValidation;
