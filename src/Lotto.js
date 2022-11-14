const { REGEXP, ERROR_MESSAGE } = require('./constant/constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!numbers.every((number) => REGEXP.CHECK_NUMBER.test(number))) {
      throw new Error(ERROR_MESSAGE.ONLY_INPUT_INTEGER);
    } else if (!numbers.every((number) => !REGEXP.CHECK_START_NUMBER.test(number))) {
      throw new Error(ERROR_MESSAGE.START_NUMBER_ZERO);
    } else if (!numbers.every((number) => number > 0 && number < 46)) {
      throw new Error(ERROR_MESSAGE.NUMBER_INVALID_RANGE);
    } else if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.SIX_NUMBERS_NOT_DUPLICATE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
