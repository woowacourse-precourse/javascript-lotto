const { pickUniqueNumbersInRange } = require('@woowacourse/mission-utils').Random;
const { NUMBER, ERROR } = require('./Constants');

class LottoStore {
  #money;
  #count;
  #autoLotto = [];

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    if (/[^0-9]/g.test(money)) {
        throw new Error(ERROR.MONEY_NUMBER);
    }

    if (money % NUMBER.LOTTO_UNIT !== 0) {
      throw new Error(ERROR.MONEY_UNIT);
    }
  }

  getCount() {
    this.#count = this.#money / NUMBER.LOTTO_UNIT;
    return this.#count;
  }

  getAutoLotto() {
    for(let index = 0; index < this.#count; index++){
      const numbers = pickUniqueNumbersInRange(NUMBER.LOTTO_MINIMUM, NUMBER.LOTTO_MAXIMUM, NUMBER.LOTTO_NUMBER);
      this.#autoLotto.push(numbers.sort((a, b) => a - b));
    }
    return this.#autoLotto;
  }

}

module.exports = LottoStore;
