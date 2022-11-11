const { ERROR_MESSAGE } = require("./constants/message.js");
const { LOTTO_DIGITS } = require("./constants/condition.js");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO_DIGITS) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
    }
    if (new Set(numbers).size !== LOTTO_DIGITS) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBER);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
