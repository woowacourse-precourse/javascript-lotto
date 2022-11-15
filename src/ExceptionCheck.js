const Utils = require('./Utils');
const { LOTTO_ERROR_MSG, LOTTO, NUM } = require('./Constants');

class ExceptionCheck {
  constructor() {
    this.utils = new Utils();
  }
  userInputMoneyValue(moneyValue) {
    if (moneyValue % LOTTO.PRICE !== NUM.REST_ZERO || moneyValue === NUM.REST_ZERO) {
      throw new Error(LOTTO_ERROR_MSG.IS_WRONG_MONEY_VALUE);
    }
  }
  userInputWinNumbers(winNumbers) {
    if (winNumbers.lenght !== NUM.HOW_MANY) {
      throw new Error(LOTTO_ERROR_MSG.IS_WRONG_NUMBER_COUNT);
    }
  }
  userInputWinNumberRange(winNumbers) {
    if (winNumbers.some(number => number <= 0 || number >= 46)) {
      throw new Error(LOTTO_ERROR_MSG.IS_WRONG_NUMBER_RANGE);
    }
  }
}

module.exports = ExceptionCheck;
