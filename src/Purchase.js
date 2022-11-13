const { Random } = require('@woowacourse/mission-utils');
const { validateCashInput } = require('./utils/validator');
const { MONEY_UNIT, LOTTO_NUMBER } = require('./constants');

class Purchase {
  #cash;

  #lottoCount;

  #lottoSet;

  constructor(cash) {
    validateCashInput(cash);
    this.#lottoCount = 0;
    this.#cash = Number(cash);
    this.#lottoSet = new Set();
    this.setLottoCount();
  }

  setLottoCount() {
    this.#lottoCount = this.#cash / MONEY_UNIT;
  }

  get Cash() {
    return this.#cash;
  }

  get LottoCount() {
    return this.#lottoCount;
  }

  makeRandomNumberArr() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.START,
      LOTTO_NUMBER.END,
      LOTTO_NUMBER.LENGTH,
    ).sort((a, b) => a - b);
  }

  makeLottoSet(count) {
    for (let i = 0; i < count; i++) {
      const numbers = this.makeRandomNumberArr();
      this.#lottoSet.add(JSON.stringify(numbers));
    }

    let lottoSetSize = this.#lottoSet.size;

    if (count !== lottoSetSize) {
      return this.makeLottoSet(count - lottoSetSize);
    }

    return this.#lottoSet;
  }
}

module.exports = Purchase;
