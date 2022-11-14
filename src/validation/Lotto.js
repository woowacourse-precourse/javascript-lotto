const { LOTTO_ERROR } = require('../constant/errorMessage');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.isSorted(numbers);
    this.isInRange(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.CHECK_COUNT);
    }
    const set = new Set(numbers);
    if (set.size < numbers.length) {
      throw new Error(LOTTO_ERROR.CHECK_OVERLAP);
    }
  }

  isSorted(numbers) {
    numbers.map((number, index) => {
      if (number > numbers[index + 1]) {
        throw new Error(LOTTO_ERROR.CHECK_SORTED);
      }
    });
  }

  isInRange(numbers) {
    numbers.map((number) => {
      if (number < 1 || number > 45) {
        throw new Error(LOTTO_ERROR.CHECK_RANGE);
      }
    });
  }
}

module.exports = Lotto;
