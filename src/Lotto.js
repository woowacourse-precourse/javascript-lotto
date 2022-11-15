const LottoValidator = require("./validator/LottoValidator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const validator = new LottoValidator();
    validator.validateDuplication(numbers);
    validator.validateIsNaN(numbers);
    validator.validateRange(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
