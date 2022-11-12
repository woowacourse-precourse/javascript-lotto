const { Random } = require('@woowacourse/mission-utils');
const { validate, isLottoNumber } = require('./Validator');
const { LOTTO } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    validate(numbers, isLottoNumber);
    this.#numbers = numbers;
  }

  static generateTicket() {
    const { MIN_NUMBER, MAX_NUMBER, SIZE } = LOTTO;
    return new Lotto(
      Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, SIZE),
    );
  }
}

module.exports = Lotto;
