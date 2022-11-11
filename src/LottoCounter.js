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
    if (Number.isNaN(Number(cash))) {
      throw ERROR.MUST_BE_NUMBER;
    }
    if (cash < NUMBER.INPUT_UNITS) {
      throw ERROR.MUST_INPUT_MORE_THAN_1000;
    }
    if (cash % NUMBER.INPUT_UNITS !== 0) {
      throw ERROR.MUST_BE_1000_UNIT;
    }

    return true;
  }
}

module.exports = LottoCounter;
