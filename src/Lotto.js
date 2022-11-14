const Exception = require('./Exception');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.exception = new Exception();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.exception.validateWinningNumber(numbers);
  }

  get winningNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
