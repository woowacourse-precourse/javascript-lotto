const { LOTTO_ERROR_MESSAGE } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR_MESSAGE.LENGTH);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(LOTTO_ERROR_MESSAGE.DUPLICATE);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
