const { ERROR_MESSAGE_LOTTO } = require('../constants/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE_LOTTO.LENGTH);
    }
    if (!numbers.every((e) => e >= 1 && e <= 45)) {
      throw new Error(ERROR_MESSAGE_LOTTO.RANGE);
    }
    if (!numbers.every((e) => Number.isInteger(e))) {
      throw new Error(ERROR_MESSAGE_LOTTO.ISINTEGER);
    }
    const setNumbers = new Set(numbers)
    if (numbers.length !== setNumbers.size) {
      throw new Error(ERROR_MESSAGE_LOTTO.OVERLAP);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;