const { ERROR } = require('./constants/constants.js');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.NOT_SIX_LOTTO_NUMBERS_ERROR);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.LOTTO_NUMBERS_DUPLICATED);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
