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

  set winningNums(input) {
    if (Validation.isRightBonus(this.#numbers, input)) {
      this.#numbers.push(Number(input));
    }
  }

  validate(numbers) {
    return Validation.isRightInput(numbers);
  }
}

module.exports = Lotto;
