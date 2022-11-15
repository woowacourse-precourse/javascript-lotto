const { ERROR } = require('./constants/constants.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateNumbersLength(numbers);
    this.validateNumbersRange(numbers);
    this.validateUniqueNumbers(numbers);
  }

  validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO.NOT_SIX_NUMBER);
    }
  }

  validateUniqueNumbers(numbers) {
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error(ERROR.LOTTO.DUPLICATE_NUMBER);
    }
  }

  validateNumbersRange(numbers) {
    if (!numbers.every((e) => e >= 1 && e <= 45)) {
      throw new Error(ERROR.LOTTO.OUT_OF_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
