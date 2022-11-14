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

  // TODO: 추가 기능 구현
  getTargetNumbers() {
    return [...this.#numbers];
  }
}

module.exports = Lotto;
