const Utils = require('./Utils');
const { LOTTO_ERROR_MSG } = require('./Constants');

class ExceptionCheck {
  constructor() {
    this.utils = new Utils();
  }
  userInputMoneyValue(moneyValue) {
    if (moneyValue % 1000 !== 0 || moneyValue === 0) {
      throw new Error(LOTTO_ERROR_MSG.IS_WRONG_MONEY_VALUE);
    }
  }
  userInputWinNumbers(winNumbers) {
    if (winNumbers.lenght !== 6) {
      throw new Error(LOTTO_ERROR_MSG.IS_WRONG_NUMBER_COUNT);
    }
  }
}

module.exports = ExceptionCheck;
