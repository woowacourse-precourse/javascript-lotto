const { errMsg } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(errMsg.invalidLottoNumber);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
