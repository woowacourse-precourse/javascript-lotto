const Application = require('./Application');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validateLength(numbers);
    this.#numbers = numbers;
  }

  static validateLength(numbers) {
    const CRITERION = 6;

    Application.validateArrayLength(numbers, CRITERION);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
