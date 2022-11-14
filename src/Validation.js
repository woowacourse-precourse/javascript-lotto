const { ERROR } = require('./constants');
const { error } = require('./util');

const isNotNumber = (input) => {
  return /[^\d]+/.test(input);
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

module.exports = { checkLottoAmount };
