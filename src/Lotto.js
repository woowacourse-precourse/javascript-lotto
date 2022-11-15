const {
  validateLength,
  validateDuplicate,
  validateNumberRange,
} = require('./util/validate');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validateLength(numbers);
    validateDuplicate(numbers);
    validateNumberRange(numbers);
  }

  setLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
