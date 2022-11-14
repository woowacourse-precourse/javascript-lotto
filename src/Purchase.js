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

  get Cash() {
    return this.#cash;
  }

  get LottoCount() {
    return this.#lottoCount;
  }

  validateCashInput(value) {
    if (value % MONEY_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVIDE_BY_THOUSAND_ERROR);
    }
    if (value <= 0) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE_NUMBER_ERROR);
    }
    const regExp = /[0-9]/g;
    const matchArr = value.match(regExp);
    if (matchArr.length !== value.length) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER_ERROR);
    }
  }
}

module.exports = Purchase;
