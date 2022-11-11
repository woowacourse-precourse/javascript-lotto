const { Random } = require('@woowacourse/mission-utils');
const { validateCashInput } = require('./utils/validator');

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
    this.#lottoCount = this.#cash / 1000;
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
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      this.#lottoList.push(numbers);
    }
  }
}

module.exports = Purchase;
