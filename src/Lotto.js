const { LOTTO, ERROR } = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO.NUMBER_SELECT) {
      throw new Error(ERROR.SELECT);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
