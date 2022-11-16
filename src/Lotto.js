const { ERROR, LOTTO } = require('./constants/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!this.isLength(numbers)) {
      throw new Error(ERROR.LOTTO_NUMBER.NOT_LENGTH);
    }
    if (!this.isNumber(numbers)) {
      throw new Error(ERROR.LOTTO_NUMBER.NOT_NUMBER);
    }
    if (!this.isRange(numbers)) {
      throw new Error(ERROR.LOTTO_NUMBER.NOT_RANGE);
    }
    if (!this.isUnique(numbers)) {
      throw new Error(ERROR.LOTTO_NUMBER.NOT_UNIQUE);
    }
  }

  isLength(numbers) {
    return numbers.length === LOTTO.LENGTH;
  }

  isNumber(numbers) {
    return numbers.every((number) => String(number).match(/^[0-9]+$/));
  }

  isRange(numbers) {
    return numbers.every(
      (number) => number >= LOTTO.MINIMUM_RANGE && number <= LOTTO.MAXIMUM_RANGE
    );
  }

  isUnique(numbers) {
    return numbers.length === new Set(numbers).size;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
