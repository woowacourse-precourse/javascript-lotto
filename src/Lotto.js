const { ERROR_MESSAGES } = require("./utils/constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.LOTTO_LENGTH_ERROR);
    }

    const setNum = new Set(numbers);
    if (setNum.size !== 6) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_ERROR);
    }

    numbers.map((number) => {
      if (!(parseInt(number) >= 1 && parseInt(number) <= 45)) {
        throw new Error(ERROR_MESSAGES.LOTTO_RANGE_ERROR);
      }
    });
  }
}

module.exports = Lotto;
