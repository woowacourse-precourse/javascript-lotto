const {
  LOTTO_LENGTH_ERROR,
  LOTTO_TYPE_ERROR,
  LOTTO_DUPLICATE_ERROR,
} = require("./Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_LENGTH_ERROR);
    }
    if (numbers.filter((number) => isNaN(Number(number))).length !== 0) {
      throw new Error(LOTTO_TYPE_ERROR);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(LOTTO_DUPLICATE_ERROR);
    }
  }

  get() {
    return this.#numbers;
  }

  print() {
    return `[${this.#numbers.join(", ")}]`;
  }
}

module.exports = Lotto;
