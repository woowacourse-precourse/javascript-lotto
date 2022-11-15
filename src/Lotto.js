const { WinningExceptions } = require('./Exceptions');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    new WinningExceptions(numbers).check();
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
