const ERROR = require('./constant');

class Validator {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  isValidateLength() {
    return this.#numbers.length === 6;
  }

  isValidateRange() {
    for (let number of this.#numbers) {
      if (!(1 <= number && number <= 45)) return false;
    }

    return true;
  }

  isDuplicate() {
    return new Set(this.#numbers).size !== this.#numbers.length;
  }

  lottoNumberValidate() {
    if (!this.isValidateLength()) throw new Error(ERROR.LENGTH);

    if (!this.isValidateRange()) throw new Error(ERROR.RANGE);

    if (this.isDuplicate()) throw new Error(ERROR.DUPLICATE);
  }
}

module.exports = Validator;
