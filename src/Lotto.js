const ERROR = require('./constants/error');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const uniqueNumbers = [...new Set(numbers)];

    if (numbers.length !== 6) {
      throw new Error(ERROR.SIX_NUMBERS);
    }

    if (uniqueNumbers.length !== 6) {
      throw new Error(ERROR.UNIQUE_NUMBERS);
    }

    if (uniqueNumbers.some((number) => number < 1 && number > 45)) {
      throw new Error(ERROR.FROM1TO45_NUMBERS);
    }
  }
}

module.exports = Lotto;
