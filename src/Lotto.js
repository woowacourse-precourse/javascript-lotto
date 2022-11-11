const { ERROR } = require('./utils/constants');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.NOT_ENOUGH_NUMBER);
    }

    if (/[^\,0-9]/.test(String(numbers))) {
      throw new Error(ERROR.NOT_A_NUMBER);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR.DUPLICATE);
    }

    if (Math.min(...numbers) <= 0 || Math.max(...numbers) > 45) {
      throw new Error(ERROR.OUT_OF_RANGE);
    }
  }
}

module.exports = Lotto;
