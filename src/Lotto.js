const ErrorCheck = require('../components/ErrorCheck');

class Lotto {
  #numbers;

  constructor(numbers) {
    ErrorCheck.winningNumber(numbers);
    this.#numbers = numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
