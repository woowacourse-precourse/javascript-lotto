const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('./constant/Lotto');
const Validation = require('./Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortNumber(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  validate(numbers) {
    Validation.validateLottoNumber(numbers);
  }

  sortNumber(lotto) {
    return lotto.sort((a, b) => a - b);
  }

  static generateNumbers() {
    return Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.LENGTH);
  }
}

module.exports = Lotto;
