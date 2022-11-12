const InputException = require('./InputException');

const inputException = new InputException();

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    inputException.handleWinningNumbersException(numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
