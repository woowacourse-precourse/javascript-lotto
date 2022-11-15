const { LOTTO_ERROR_MESSAGE } = require("./Constant");
const { existDuplicateNumber, existNumberOutOfRange } = require("./Validate");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  /* eslint-disable class-methods-use-this */
  validate(numbers) {
    /* eslint-enable class-methods-use-this */
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR_MESSAGE.LENGTH_6);
    }

    if (existDuplicateNumber(numbers)) {
      throw new Error(LOTTO_ERROR_MESSAGE.DUPLICATE_NUMBER);
    }

    if (existNumberOutOfRange(numbers, 1, 45)) {
      throw new Error(LOTTO_ERROR_MESSAGE.RANGE_FROM_1_TO_45);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

module.exports = Lotto;
