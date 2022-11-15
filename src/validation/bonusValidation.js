const { ERROR } = require('../constant/constant');

function bonusValidation(input, WinningNumber) {
  DoubleCheckBonus(input, WinningNumber);
  checkBonusOnlyNumber(input);

  return true;
}

function DoubleCheckBonus(input, WinningNumber) {
  const includes = WinningNumber.includes(input);

  if (includes) {
    throw new Error(ERROR.BONUS.NOT_OVERLAP);
  }
}

function checkBonusOnlyNumber(input) {
  if (Number(input) < 1 || Number(input) > 45 || Number.isNaN(Number(input))) {
    throw new Error(ERROR.BONUS.ONLY_SET_RANGE_NUMBER);
  }
}

module.exports = {
  bonusValidation,
  DoubleCheckBonus,
  checkBonusOnlyNumber,
};
