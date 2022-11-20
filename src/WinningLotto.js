const {
  validateLength,
  validateDuplicate,
  validateNumberRange,
  validateIsNumber,
  validateDuplicateWithBonusNumber,
} = require('./util/validate');

class WinningLotto {
  #numbers;
  #bonusNumber;

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

  validateBonusNumber(number) {
    validateDuplicateWithBonusNumber(this.#numbers, number);
    validateIsNumber([number]);

    this.#bonusNumber = number;
  }

  WinningLotto() {
    return this.#numbers;
  }

  BonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = WinningLotto;
