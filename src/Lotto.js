const { ERROR_MESSAGE } = require('./constant/constantOfLotto');

const { DIFFERENT_NUMBER_MESSAGE, NOT_SIX_NUMBERS_MESSAGE } = ERROR_MESSAGE;

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }
  // 유효성 검사
  static validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(NOT_SIX_NUMBERS_MESSAGE);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(DIFFERENT_NUMBER_MESSAGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;