const { Random } = require('@woowacourse/mission-utils');
const { MONEY_UNIT, LOTTO_NUMBER, ERROR_MESSAGE } = require('./constants');

class Purchase {
  #cash;

  #lottoCount;

  #lottoSet;

  constructor(cash) {
    this.validateCashInput(cash);
    this.#lottoCount = 0;
    this.#cash = Number(cash);
    this.#lottoSet = new Set();
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

  #makeRandomNumberArr() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.START,
      LOTTO_NUMBER.END,
      LOTTO_NUMBER.LENGTH,
    ).sort((a, b) => a - b);
  }

  makeLottoSet(count) {
    for (let i = 0; i < count; i++) {
      const numbers = this.#makeRandomNumberArr();
      this.#lottoSet.add(JSON.stringify(numbers));
    }

    let lottoSetSize = this.#lottoSet.size;

    if (count !== lottoSetSize) {
      return this.makeLottoSet(count - lottoSetSize);
    }

    return this.#lottoSet;
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
