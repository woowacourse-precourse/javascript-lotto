const { Random, Console } = require('@woowacourse/mission-utils');
const { VARIABLE_LOTTO, LOTTO_ERROR_MESSAGE } = require('../utils/constants');

class LottoStore {
  #money;

  #count;

  #lottos;

  constructor(money) {
    this.#money = money;
    this.#count = 0;
    this.#lottos = this.#getBuyAt();

    this.print();
  }

  getMoney() {
    return this.#money;
  }

  getLottos() {
    return this.#lottos;
  }

  print() {
    [...this.#lottos].forEach(lotto => Console.print(lotto));
  }

  #getBuyAt() {
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
