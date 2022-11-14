const { ERROR_MESSAGE } = require('./constant');
const { LottoValidator, BonusValidator } = require('./utils/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    LottoValidator.validate(numbers);
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
