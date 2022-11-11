const { ERROR, NUMBER } = require('./utils/constants.js');

class LottoCounter {
  constructor(cash) {
    this.isValidCash(cash);
    this.inputtedCash = cash;
    this.countOfLotto = this.inputtedCash / NUMBER.INPUT_UNITS;
  }

  getCountOfLotto() {
    return this.countOfLotto;
  }

  isValidCash(cash) {
    if (cash < NUMBER.INPUT_UNITS) {
      throw ERROR.MUST_INPUT_MORE_THAN_1000;
    }
    if (cash % NUMBER.INPUT_UNITS !== 0) {
      throw ERROR.MUST_BE_1000_UNIT;
    }
    if (Number(cash) === NaN) {
      throw ERROR.MUST_BE_NUMBER;
    }

    return true;
  }
}

module.exports = LottoCounter;
