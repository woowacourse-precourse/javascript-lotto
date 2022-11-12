const { ERROR } = require('./lib/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_LENGTH_ERROR);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR.DUPLICATE_LOTTO_ERROR);
    }

    numbers.forEach((item) => {
      if (!/^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/.test(item)) {
        throw new Error(ERROR.INCORRECT_RANGE_ERROR);
      }
    });
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
