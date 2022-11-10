const { ERROR_MESSAGE } = require("./constant/constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.WRONG_QUANTITY);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
