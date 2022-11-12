const { ERROR_MESSAGES } = require('./constant/messages');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateLength(numbers);
    this.validateDoubled(numbers);
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.NUMBERS_LENGTH_MUST_BE_SIX);
    }
  }

  validateDoubled(numbers) {
    const set = Array.from(new Set(numbers));
    if (numbers.length !== set.length)
      throw new Error(ERROR_MESSAGES.NUMBERS_MUST_NOT_OVERLAP);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
