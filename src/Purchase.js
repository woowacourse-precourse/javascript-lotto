const { Random } = require('@woowacourse/mission-utils');

class Purchase {
  #cash;

  #lottoCount;

  constructor(cash) {
    this.#lottoCount = 0;
    this.#cash = cash;
    this.validateCashInput(this.#cash);
  }

  validateCashInput(value) {
    if (value % 1000 !== 0) {
      throw new Error('[ERROR] 1,000으로 나누어떨어지는 금액을 입력해주세요.');
    }
    if (value <= 0) {
      throw new Error('[ERROR] 양수 값을 입력해주세요.');
    }
    this.#lottoCount = value / 1000;
  }

  get LottoCount() {
    return this.#lottoCount;
  }
}

module.exports = Purchase;
