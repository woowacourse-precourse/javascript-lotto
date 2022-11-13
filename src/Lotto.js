const { LottoValidator } = require('./utils/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    LottoValidator.validate(numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
