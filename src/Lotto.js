const { ERROR_MASSAGE } = require('./utils/constant');

const { DIFFERENT_NUMBER_MESSAGE, LOTTO_NUMBER_LENGTH_MESSAGE } = ERROR_MASSAGE;

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_NUMBER_LENGTH_MESSAGE);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(DIFFERENT_NUMBER_MESSAGE);
    }
  }

  getNumber() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
