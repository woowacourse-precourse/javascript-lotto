const { LOTTO } = require('./constants');
const { LOTTO_ERROR } = require('./error/error.constants');
const { isUnique, isInRange, isNumber } = require('./utils/validators/numbers');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
    return this;
  }

  static validate(numbers) {
    if (numbers.length !== LOTTO.NUMBER_COUNT) {
      throw new Error(LOTTO_ERROR.LENGTH_NOT_ENOUGH);
    }
    if (!numbers.every(isInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER))) {
      throw new Error(LOTTO_ERROR.IS_NOT_IN_RANGE);
    }
    if (!isUnique(numbers)) {
      throw new Error(LOTTO_ERROR.IS_DUPLICATED);
    }
    if (!numbers.every(isNumber)) {
      throw new Error(LOTTO_ERROR.IS_NOT_NUMBER);
    }
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getRank(rankDeterminator) {
    return rankDeterminator.getRank(this.#numbers);
  }
}

module.exports = Lotto;
