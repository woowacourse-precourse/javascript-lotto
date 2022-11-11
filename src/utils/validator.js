const { ERROR_MESSAGE, MONEY_UNIT, LOTTO_NUMBER } = require('../constants');

function validateCashInput(value) {
  if (value % MONEY_UNIT !== 0) {
    throw new Error(ERROR_MESSAGE.NOT_DIVIDE_BY_THOUSAND_ERROR);
  }
  if (value <= 0) {
    throw new Error(ERROR_MESSAGE.NOT_POSITIVE_NUMBER_ERROR);
  }
}

function validateBonus(winningNumberArr, input) {
  const regExp = /[0-9]/g;
  const matchArr = input.match(regExp);
  if (matchArr.length !== input.length) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER_ERROR);
  }
  let num = Number(input);
  if (num < LOTTO_NUMBER.START || num > LOTTO_NUMBER.END) {
    throw new Error(ERROR_MESSAGE.NUM_IN_RANGE_ERROR);
  }
  if (winningNumberArr.includes(num)) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER_NOT_DIFFERENT_NUMBER_ERROR);
  }
}

module.exports = { validateCashInput, validateBonus };
