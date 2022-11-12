const { ERROR } = require('../constant/constant');

function lottoValidation(numbers) {
  checkSixNumber(numbers);
  checkUsefulNumber(numbers);

  return true;
}

function checkSixNumber(numbers) {
  if (new Set(numbers).size !== 6) {
    throw new Error(ERROR.LOTTO.ONLY_SIX_NUMBER);
  }
}

function checkUsefulNumber(numbers) {
  if (Math.min(...numbers) < 1 || Math.max(...numbers) > 45) {
    throw new Error(ERROR.LOTTO.ONLY_SET_RANGE_NUMBER);
  }
}

module.exports = lottoValidation;
