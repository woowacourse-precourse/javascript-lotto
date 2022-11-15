const { ERROR_MESSAGE_WINNING_NUMBER } = require("./constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE_WINNING_NUMBER.LENGTH);
    }
    for (let num of numbers) {
      if (num < 1 || num > 45) {
        throw new Error(ERROR_MESSAGE_WINNING_NUMBER.RANGE);
      }
      if (isNaN(num)) {
        throw new Error(ERROR_MESSAGE_WINNING_NUMBER.TYPE);
      }
    }
    const numbersSet = new Set(numbers);
    if (numbersSet.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE_WINNING_NUMBER.DUPLICATION);
    }
  }
}

module.exports = Lotto;
