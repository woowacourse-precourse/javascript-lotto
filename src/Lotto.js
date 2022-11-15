const Validator = require('./lib/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    Validator.errorIfLottosInvalidFormat(numbers);
  }
}

module.exports = Lotto;
