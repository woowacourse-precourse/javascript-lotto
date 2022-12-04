const { Random } = require('@woowacourse/mission-utils');
const { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_LENGTH, PRICE } = require('./settings');

class Purchase {
  #money;

  #issuedLottos = [];

  getCount(money) {
    this.#money = money;
    const count = money / PRICE;

    return count;
  }

  static getRandomNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUMBER,
      MAX_LOTTO_NUMBER,
      LOTTO_LENGTH,
    );

    return numbers;
  }

  issueLottos(count, getNumbers) {
    this.#issuedLottos = Array.from({ length: count }, () => getNumbers().sort((a, b) => a - b));
  }

  getIssuedLottos() {
    return this.#issuedLottos;
  }

  getExpense() {
    return this.#money;
  }
}

module.exports = Purchase;
