const { ERROR } = require('./constants/constants');

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
    return numbers.length === 6;
  }

  isNumber(numbers) {
    return numbers.every((number) => number.match(/^[0-9]+$/));
  }

  isRange(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  }

  isUnique(numbers) {
    return numbers.length === new Set(numbers).size;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
