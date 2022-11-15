const { LOTTO_ERROR } = require('./constants/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.LENGTH);
    }

    if (numbers.some((number) => /[^0-9]/.test(number))) {
      throw new Error(LOTTO_ERROR.NUMBER);
    }

    if (
      numbers.some(
        (number) => numbers.indexOf(number) !== numbers.lastIndexOf(number)
      )
    ) {
      throw new Error(LOTTO_ERROR.DUPLICATION);
    }

    if (numbers.some((number) => !(number >= 1 && number <= 45))) {
      throw new Error(LOTTO_ERROR.DOMAIN);
    }
  }
}

module.exports = Lotto;
