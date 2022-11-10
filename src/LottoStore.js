const { Random } = require('@woowacourse/mission-utils');
const { VARIABLE_LOTTO } = require('../utils/constants');

class LottoStore {
  #money;

  #count;

  constructor(money) {
    this.#money = money;
    this.#count = 0;
  }

  isThousandWon() {
    if (!/^[1-9]+0{3,}$/.test(this.#money)) {
      throw new Error('[ERROR] 금액 단위는 천 단위여야 합니다.');
    }

    return this;
  }

  getHowMany() {
    this.#count = Number(this.#money) / 1000;

    return this;
  }

  buy() {
    return Array.from({ length: this.#count }, () =>
      Random.pickUniqueNumbersInRange(
        VARIABLE_LOTTO.start,
        VARIABLE_LOTTO.end,
        VARIABLE_LOTTO.len,
      ),
    );
  }
}

module.exports = LottoStore;
