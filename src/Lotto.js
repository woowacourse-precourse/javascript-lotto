const { ERROR, LOTTO } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (new Set(numbers).size !== LOTTO.NUMBER_COUNT) {
      throw new Error(ERROR.INVALID_WIN_DUPLICATE);
    }
    numbers.forEach(number => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR.INVALID_WIN_RANGE);
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
