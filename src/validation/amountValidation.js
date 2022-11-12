function amountValidation(input) {
  checkAmountEmpty(input);
  checkAmountStirng(input);
  checkAmountUnit(input);

  return true;
}
const { ERROR } = require('../constant/constant');

function checkAmountUnit(input) {
  if (input[input.length - 1] !== '0') {
    throw new Error(ERROR.AMOUNT.UNDER_MONEY);
  }
  if (input[input.length - 2] !== '0') {
    throw new Error(ERROR.AMOUNT.UNDER_MONEY);
  }
  if (input[input.length - 3] !== '0') {
    throw new Error(ERROR.AMOUNT.UNDER_MONEY);
  }
}

function checkAmountStirng(input) {
  if (/[^(0-9)]/gi.test(input)) {
    throw new Error(ERROR.AMOUNT.ONLY_NUMBER);
  }
}

function checkAmountEmpty(input) {
  if (input === '') {
    throw new Error(ERROR.AMOUNT.NOT_EMPTY);
  }
}

module.exports = {
  amountValidation,
  checkAmountUnit,
  checkAmountStirng,
  checkAmountEmpty,
};
