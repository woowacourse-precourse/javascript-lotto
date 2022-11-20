const {
  validateLength,
  validateDuplicate,
  validateNumberRange,
  validateIsNumber,
} = require('./util/validate');

class WinningLotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validateLength(numbers);
    validateDuplicate(numbers);
    validateNumberRange(numbers);
    validateIsNumber(numbers);
  }

  WinningLotto() {
    return this.#numbers;
  }
}

module.exports = WinningLotto;
