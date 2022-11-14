const { ERROR, LOTTO_PRICE } = require('./utils/constants.js');

class LottoCounter {
  constructor(cash) {
    this.isValidCash(cash);
    this.lottosQuantity = cash / LOTTO_PRICE;
  }

  isValidCash(cash) {
    if (Number.isNaN(cash)) {
      throw ERROR.MUST_BE_NUMBER;
    }
    if (cash < LOTTO_PRICE) {
      throw ERROR.MUST_INPUT_MORE_THAN_LOTTO_PRICE;
    }
    if (cash % LOTTO_PRICE !== 0) {
      throw ERROR.MUST_BE_1000_UNIT;
    }

    return true;
  }

  getLottosQuantity() {
    return this.lottosQuantity;
  }
}

module.exports = LottoCounter;
