const { Random } = require('@woowacourse/mission-utils');
const { VARIABLE_LOTTO, LOTTO_ERROR_MESSAGE } = require('../utils/constants');

class LottoStore {
  #money;

  #count;

  constructor(money) {
    this.#money = money;
    this.#count = 0;
  }

  getLottoPayment() {
    return this.#money;
  }

  getBuyAt() {
    return this.#isThousandWon()
      .#getHowMany()
      .#buy();
  }

  #isThousandWon() {
    if (!VARIABLE_LOTTO.priceRegex.test(this.#money)) {
      throw new Error(LOTTO_ERROR_MESSAGE.priceLimit);
    }

    return this;
  }

  #getHowMany() {
    this.#count = Number(this.#money) / VARIABLE_LOTTO.priceUnit;

    return this;
  }

  #buy() {
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
