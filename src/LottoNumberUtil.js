const { LOTTO_ERROR_MESSAGE, AMOUNT_STANDARD } = require('./constants');

function validateMoney(number) {
  if (number < 0 || number % AMOUNT_STANDARD.ONE_THOUSAND_WON !== 0) {
    throw new Error(LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_AMOUNT_ERROR);
  }
}

function validateLength(numbers) {
  if (numbers.length !== 6) {
    throw new Error(LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_LENGTH_ERROR);
  }
}

function validateDuplication(numbers) {
  if (new Set(numbers).size !== numbers.length) {
    throw new Error(LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_DOUBLE_ERROR);
  }
}

function validateRange(number) {
  if (number < 1 || number > 45 || number % 1 !== 0) {
    throw new Error(LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR);
  }
}

function roundCustom(number) {
  return Math.round(number * 100) / 100;
}

module.exports = {
  validateMoney,
  validateLength,
  validateDuplication,
  validateRange,
  roundCustom,
};
