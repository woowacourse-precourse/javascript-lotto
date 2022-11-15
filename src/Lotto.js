const { ERROR_MESSAGE_WINNING_NUMBER, GAME_RULES } = require("./constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== GAME_RULES.LENGTH) {
      throw new Error(ERROR_MESSAGE_WINNING_NUMBER.LENGTH);
    }
    for (let num of numbers) {
      if (num < GAME_RULES.MIN_NUMBER || num > GAME_RULES.MAX_NUMBER) {
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
