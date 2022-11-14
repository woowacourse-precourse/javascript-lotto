const Validation = require('./Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(input) {
    Validation.validate(input);
  }

  getTargetNumbers() {
    return [...this.#numbers];
  }
}

module.exports = Lotto;
