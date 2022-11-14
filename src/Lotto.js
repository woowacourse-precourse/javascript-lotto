const MESSAGE = require("./Message");
const { LOTTERY_NUMBER_LENGTH, LOTTERY_MIN_NUMBER, LOTTERY_MAX_NUMBER } = require("./GameConstants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkLength(numbers);
    numbers.forEach((num, index) => {
      this.checkNaN(num);
      this.checkNotInteger(num);
      this.checkOutOfRange(num);
      this.checkDuplication(numbers, num, index);
    });
  }

  getNumber() {
    return this.#numbers;
  }

  checkLength(num) {
    if (num.length !== LOTTERY_NUMBER_LENGTH) {
      throw new Error(MESSAGE.ERROR_LOTTO.LENGTH);
    }
  }

  checkNaN(num) {
    if (Number.isNaN(Number(num))) {
      throw new Error(MESSAGE.ERROR_LOTTO.NOT_NUMBER);
    }
  }

  checkNotInteger(num) {
    if (!Number.isInteger(num)) {
      throw new Error(MESSAGE.ERROR_LOTTO.NOT_INTEGER);
    }
  }

  checkOutOfRange(num) {
    if (num < LOTTERY_MIN_NUMBER || num > LOTTERY_MAX_NUMBER) {
      throw new Error(MESSAGE.ERROR_LOTTO.OUT_OF_RANGE);
    }
  }

  checkDuplication(numbers, comparisonNumber, comparisonIndex) {
    numbers.forEach((num, index) => {
      if (comparisonNumber === num && comparisonIndex !== index) {
        throw new Error(MESSAGE.ERROR_LOTTO.DUPLICATION);
      }
    });
  }
}

module.exports = Lotto;
