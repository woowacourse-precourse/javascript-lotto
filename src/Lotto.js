const { ERROR_MESSAGE } = require("./message");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateComma(numbers);
    this.validateLength(numbers);
    this.validateOverlap(numbers);
    this.validateRange(numbers);
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_LENGTH_SIX);
    }
  }
  validateOverlap(numbers) {
    const deletedOverlap = [...new Set(numbers)];
    if (deletedOverlap.length !== numbers.length) {
      throw new Error(ERROR_MESSAGE.OVERLAP);
    }
  }
  validateRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.NOT_RANGE);
      }
    });
  }
  validateComma(numbers) {
    numbers = numbers.join().split("");
    numbers.forEach((e) => {
      const ascii = e.charCodeAt(0);
      if (ascii !== 44 && (ascii < 48 || ascii > 57)) {
        throw new Error(ERROR_MESSAGE.SPLIT_COMMA);
      }
    });
  }
  returnLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
