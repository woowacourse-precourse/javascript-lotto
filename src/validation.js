const { ERROR_MESSAGE } = require('./constants');

const validation = {
  isUnitOf1000(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_UNIT);
    }
  },
};

module.exports = validation;
