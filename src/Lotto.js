const MESSAGES = require("./Messages");
const { LOTTO_NUMBER_LENGTH, LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER } = require("./GameConstants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.wrongLengthException(numbers);
    numbers.forEach((num, index) => {
      this.notNumberException(num);
      this.notIntegerException(num);
      this.outOfRangeException(num);
      this.duplicationException(numbers, num, index);
    });
  }

  getNumber() {
    return this.#numbers;
  }

  wrongLengthException(num) {
    if (num.length !== LOTTO_NUMBER_LENGTH) {
      throw new Error(MESSAGES.ERROR_LOTTO.LENGTH);
    }
  }

  notNumberException(num) {
    if (Number.isNaN(Number(num))) {
      throw new Error(MESSAGES.ERROR_LOTTO.NOT_NUMBER);
    }
  }

  notIntegerException(num) {
    if (!Number.isInteger(num)) {
      throw new Error(MESSAGES.ERROR_LOTTO.NOT_INTEGER);
    }
  }

  outOfRangeException(num) {
    if (num < LOTTO_MIN_NUMBER || num > LOTTO_MAX_NUMBER) {
      throw new Error(MESSAGES.ERROR_LOTTO.OUT_OF_RANGE);
    }
  }

  duplicationException(numbers, comparisonNumber, comparisonIndex) {
    numbers.forEach((num, index) => {
      if (comparisonNumber === num && comparisonIndex !== index) {
        throw new Error(MESSAGES.ERROR_LOTTO.DUPLICATION);
      }
    });
  }
}

module.exports = Lotto;
