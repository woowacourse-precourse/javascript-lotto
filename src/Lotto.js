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

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
