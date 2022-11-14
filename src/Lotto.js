const {
  ERROR_NOT_NUMBER,
  ERROR_NOT_BELONG,
  ERROR_NOT_DIFFERENT,
  ERROR_NOT_LENGTH_6,
} = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    numbers.map((number) => {
      if (isNaN(number)) {
        throw new Error(ERROR_NOT_NUMBER);
      }
      if (number < 1 || number > 45) {
        throw new Error(ERROR_NOT_BELONG);
      }
    });

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_NOT_DIFFERENT);
    }

    if (numbers.length !== 6) {
      throw new Error(ERROR_NOT_LENGTH_6);
    }
  }
}

module.exports = Lotto;
