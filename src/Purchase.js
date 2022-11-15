const { MONEY_UNIT, ERROR_MESSAGE } = require('./constants');

class Purchase {
  #cash;

  #lottoCount;

  constructor(cash) {
    this.validateCashInput(cash);
    this.#lottoCount = 0;
    this.#cash = Number(cash);
    this.#setLottoCount();
  }

  #setLottoCount() {
    this.#lottoCount = this.#cash / MONEY_UNIT;
  }

  get LottoCount() {
    return this.#lottoCount;
  }

  validateCashInput(value) {
    const regExp = /[0-9]/g;
    const matchArr = value.match(regExp);
    if (!matchArr || matchArr.length !== value.length) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER_ERROR);
    }
    if (value % MONEY_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVIDE_BY_THOUSAND_ERROR);
    }
  }
}

module.exports = Purchase;
