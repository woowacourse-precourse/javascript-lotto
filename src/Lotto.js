const { Validation } = require('./util');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get winningNums() {
    return this.#numbers;
  }

  validate(numbers) {
    return Validation.isRightInput(numbers);
  }
}

module.exports = Lotto;
