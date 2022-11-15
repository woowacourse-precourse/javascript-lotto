const { ERROR } = require('./common/constants');
const { error } = require('./common/util');

const isNotNumber = (input) => {
  return /[^\d]+/.test(input);
};

const isDuplicate = (input) => {
  return new Set(input).size !== 6;
};

const isNotSixDigits = (input) => {
  return input.length !== 6;
};

const isOutOfRange = (input) => {
  return input < 1 || input > 45;
};

const checkLottoAmount = (amount) => {
  if (isNotNumber(amount)) {
    error(ERROR.NOT_NUMBER);
  }

  if (amount < 1000) {
    error(ERROR.UNDER_THOUSAND);
  }

  if (amount % 1000 !== 0) {
    error(ERROR.NOT_THOUSAND_UNIT);
  }
};

const checkWinningNumber = (input) => {
  const array = input.split(',');

  if (isNotSixDigits(array)) {
    error(ERROR.NOT_SIX_DIGITS);
  }

  if (isDuplicate(array)) {
    error(ERROR.DUPLICATE);
  }

  if (array.some((eachNumer) => isOutOfRange(eachNumer))) {
    error(ERROR.OUT_OF_RANGE);
  }
};

const checkBonusLottoNumber = (input) => {
  if (isNotNumber(input)) {
    error(ERROR.NOT_NUMBER);
  }
  if (isOutOfRange(input)) {
    error(ERROR.OUT_OF_RANGE);
  }
};

module.exports = { checkLottoAmount, checkWinningNumber, checkBonusLottoNumber };
