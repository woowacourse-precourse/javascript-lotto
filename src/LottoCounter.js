const ERROR = require('./utils/constants.js');
const NUMBER = require('./utils/constants.js');

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
    if (cash % NUMBER.INPUT_UNITS !== 0) {
      throw ERROR.NOT_1000_UNIT;
    }
    if (cash < NUMBER.INPUT_UNITS) {
      throw ERROR.NOT_ENOUGH_CASH;
    }

    return true;
  }
}

module.exports = LottoCounter;
