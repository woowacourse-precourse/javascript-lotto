const { Random } = require('@woowacourse/mission-utils');
const { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_LENGTH, PRICE } = require('./settings');

class Purchase {
  static getCount(money) {
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

  static issueLottos(count, getNumbers) {
    const issuedLottos = Array.from({ length: count }, () => getNumbers().sort((a, b) => a - b));

    return issuedLottos;
  }
}

module.exports = Purchase;
