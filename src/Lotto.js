const Util = require("./Util");
const {
  LOTTO_LENGTH,
  LOTTO_START,
  LOTTO_END,
  ERROR_MESSAGE,
} = require("./domain/constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!Util.isBetween(numbers, LOTTO_START, LOTTO_END)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_LOTTO);
    }
    if (Util.hasDuplicateElements(numbers)) {
      throw new Error(ERROR_MESSAGE.HAS_DUPLICATE_NUMBERS);
    }
    if (!Util.hasNElements(numbers, LOTTO_LENGTH)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH_LOTTO);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
