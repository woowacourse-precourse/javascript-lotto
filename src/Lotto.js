const MESSAGE = require("./constants/message");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MESSAGE.ERROR.LOTTO_NUMBER_LENGTH_MUST_BE_SIX);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(MESSAGE.ERROR.LOTTO_NUMBER_MUST_NOT_BE_DUPLICATE);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
