const { ERROR } = require('./constants');
const { error } = require('./util');

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

const checkLottoAmount = (money) => {
  if (isNotNumber(money)) {
    error(ERROR.NOT_NUMBER);
  }

  if (money < 1000) {
    error(ERROR.UNDER_THOUSAND);
  }

  if (money % 1000 !== 0) {
    error(ERROR.NOT_THOUSAND_UNIT);
  }
};

const checkWinningNumber = (numbers) => {
  const array = numbers.split(',');

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

const checkBonusNumber = (bonusNumber) => {
  if (isNotNumber(bonusNumber)) {
    error(ERROR.NOT_NUMBER);
  }
  if (isOutOfRange(bonusNumber)) {
    error(ERROR.OUT_OF_RANGE);
  }
};

module.exports = { checkLottoAmount, checkWinningNumber, checkBonusNumber };
