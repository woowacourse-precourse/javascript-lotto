const { VALUE } = require('../constants/numbers');
const { ERROR } = require('../constants/numbers');

const isValidMoneyNumberAmount = (money) => {
  if (isNaN(money) || money === undefined) {
    throw new Error(ERROR.MONEY_INPUT_NON_NUMBER);
  }
  if (!Number.isInteger(money)) {
    throw new Error(ERROR.MONEY_INPUT_NON_INTEGER);
  }
  if (money < 0) {
    throw new Error(ERROR.MONEY_INPUT_NEGATIVE);
  }
  if (money % VALUE.LOTTO_PRICE !== 0) {
    throw new Error(ERROR.MONEY_INPUT_NON_DIVISIBLE);
  }
};

const isValidLottoNumbers = (numbers) => {
  if (numbers.length !== VALUE.VALID_LOTTO_NUMBER_LENGTH) {
    throw new Error(ERROR.LOTTO_NUMBERS_LENGTH_INVALID);
  }
  if (hasNonNumber(numbers)) {
    throw new Error(ERROR.LOTTO_NUMBERS_HAVE_NON_NUMBER);
  }
  if (hasNonInteger(numbers) || hasInvalidSizeNumber(numbers)) {
    throw new Error(ERROR.LOTTO_NUMBERS_HAVE_INVALID_SIZE_NUMBER);
  }
  if (hasDuplicateNumbers(numbers)) {
    throw new Error(ERROR.LOTTO_NUMBERS_HAVE_DUPLICATE);
  }
};

const isValidLottoBonusNumber = (number, winningNumbers) => {
  if (isNaN(number) || number === undefined) {
    throw new Error(ERROR.BONUS_NUMBER_INVALID_INPUT);
  }
  if (!Number.isInteger(number) || isInvalidSize(number)) {
    throw new Error(ERROR.BONUS_NUMBER_SIZE_INVALID);
  }
  if (winningNumbers.includes(number)) {
    throw new Error(ERROR.BONUS_NUMBER_OVERLAPPED);
  }
};

module.exports = {
  isValidMoneyNumberAmount,
  isValidLottoNumbers,
  isValidLottoBonusNumber
};

const hasNonNumber = (array) => {
  if (array.map(isNaN).includes(true)) {
    return true;
  }
  return false;
};

const hasNonInteger = (array) => {
  if (array.map(Number.isInteger).includes(false)) {
    return true;
  }
  return false;
};

const hasDuplicateNumbers = (array) => {
  const uniqueSet = new Set(array);
  if (uniqueSet.size < VALUE.VALID_LOTTO_NUMBER_LENGTH) {
    return true;
  }
  return false;
};

const hasInvalidSizeNumber = (array) => {
  if (array.map(isInvalidSize).includes(true)) {
    return true;
  }
  return false;
};

const isInvalidSize = (number) => {
  if (number < VALUE.MIN_LOTTO_NUMBER || number > VALUE.MAX_LOTTO_NUMBER) {
    return true;
  }
  return false;
};
