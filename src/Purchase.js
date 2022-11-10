const { Random } = require('@woowacourse/mission-utils');

class Purchase {
  #cash;

  #lottoCount;

  #lottoList;

  constructor(cash) {
    this.validateCashInput(cash);
    this.#lottoCount = 0;
    this.#cash = cash;
    this.#lottoList = [];
    this.setLottoCount();
    this.makeLottoList(this.#lottoCount);
  }

  validateCashInput(value) {
    if (value % 1000 !== 0) {
      throw new Error('[ERROR] 1,000으로 나누어떨어지는 금액을 입력해주세요.');
    }
    if (value <= 0) {
      throw new Error('[ERROR] 양수 값을 입력해주세요.');
    }
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
