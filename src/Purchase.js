const { Random } = require('@woowacourse/mission-utils');
const { validateCashInput } = require('./utils/validator');
const { MONEY_UNIT, LOTTO_NUMBER } = require('./constants');

class Purchase {
  #cash;

  #lottoCount;

  #lottoList;

  constructor(cash) {
    validateCashInput(cash);
    this.#lottoCount = 0;
    this.#cash = Number(cash);
    this.#lottoList = [];
    this.setLottoCount();
    this.makeLottoList(this.#lottoCount);
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

  get LottoList() {
    return this.#lottoList;
  }

  makeLottoList(count) {
    this.#lottoList = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER.START,
        LOTTO_NUMBER.END,
        LOTTO_NUMBER.LENGTH,
      ).sort((a, b) => a - b);
      this.#lottoList.push(numbers);
    }
  }
}

module.exports = Purchase;
