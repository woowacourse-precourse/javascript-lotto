const { LOTTO_ERROR } = require('../constant/errorMessage');
const NUMBER = require('../constant/number');


class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.isSorted(numbers);
    this.isInRange(numbers);
    this.isInteger(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== NUMBER.LOTTO_CORRECT_COUNT) {
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
    numbers.map(number => {
      if (number < NUMBER.START_NUM || number > NUMBER.END_NUM) {
        throw new Error(LOTTO_ERROR.CHECK_RANGE);
      }
    });
  }

  isInteger(numbers) {
    numbers.map(number => {
      if (number % 1 !== NUMBER.ZERO) {
        throw new Error(LOTTO_ERROR.CHECK_ISINTEGER);
      }
    });
  }
}

module.exports = Lotto;
