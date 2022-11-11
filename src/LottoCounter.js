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
      throw ERROR.NOT_ENOUGH_CASH;
    }
    if (cash % NUMBER.INPUT_UNITS !== 0) {
      throw ERROR.NOT_1000_UNIT;
    }
    if (!Number.isInteger(cash)) {
      throw '[ERROR] 숫자만 입력해야 합니다.';
    }

    return true;
  }
}

module.exports = LottoCounter;
