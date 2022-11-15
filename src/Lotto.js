const { RULES, ERROR } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== RULES.LENGTH) {
      throw new Error(ERROR.WINNING_NUMBER_COUNT_CHECK);
    }

    if (new Set(numbers).size !== RULES.LENGTH) {
      throw new Error(ERROR.DUPLICATE_CHECK);
    }

    numbers.forEach((number) => {
      if (number < RULES.START_RANGE || number > RULES.END_RANGE) {
        throw new Error(ERROR.WINNING_NUMBER_RANGE_CHECK);
      }

      if (isNaN(number)) {
        throw new Error(ERROR.INPUT_NUMBER_CHECK);
      }
    });
  }

  play() {
    this.validate(this.#numbers);
    return this.#numbers;
  }
}

module.exports = Lotto;
