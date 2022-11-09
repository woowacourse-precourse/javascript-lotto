const { LOTTO, ERROR } = require('./constructor.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(ERROR.OUT_OF_LOTTO_LENGTH);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
