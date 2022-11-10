const { Console } = require('@woowacourse/mission-utils');

class Purchase {
  #cash;

  #lottoCount;

  constructor(cash) {
    this.#lottoCount = 0;
    this.#cash = cash;
  }

  validateCashInput() {
    if (this.#cash % 1000 !== 0) {
      throw new Error('[ERROR] 1,000으로 나누어떨어지는 금액을 입력해주세요.');
    }
    if (this.#cash <= 0) {
      throw new Error('[ERROR] 양수 값을 입력해주세요.');
    }
    return this;
  }

  get LottoCount() {
    this.#lottoCount = this.#cash / 1000;
    return this.#lottoCount;
  }
}

module.exports = Purchase;
