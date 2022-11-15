const { Random } = require('@woowacourse/mission-utils');
const { validate, areLottoNumbers } = require('./Validator');
const { LOTTO_BASE } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    validate(numbers, areLottoNumbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  static generateTicket() {
    const { MIN_NUMBER, MAX_NUMBER, SIZE } = LOTTO_BASE;
    return new Lotto(
      Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, SIZE),
    );
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

module.exports = Lotto;
