const { ERROR, INPUT_UNITS } = require('./utils/constants.js');

class LottoCounter {
  constructor(cash) {
    this.isValidCash(cash);
    this.lottosQuantity = cash / INPUT_UNITS;
  }

  isValidCash(cash) {
    if (Number.isNaN(Number(cash))) {
      throw ERROR.MUST_BE_NUMBER;
    }
    if (cash < INPUT_UNITS) {
      throw ERROR.MUST_INPUT_MORE_THAN_1000;
    }
    if (cash % INPUT_UNITS !== 0) {
      throw ERROR.MUST_BE_1000_UNIT;
    }

    return true;
  }

  getLottosQuantity() {
    return this.lottosQuantity;
  }
}

module.exports = LottoCounter;
