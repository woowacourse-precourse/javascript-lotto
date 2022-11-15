const {
  isNumber,
  isRightSizeAndNotDuplicated,
  isValidRange,
} = require('./Validation');

const { ERROR } = require('./Messages');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get getNumbers() {
    return this.#numbers;
  }

  validate(numbers) {
    if (!isRightSizeAndNotDuplicated(numbers, 6)) {
      throw new Error(ERROR.NOT_RIGHT_SIZE_AND_DUPLICATED);
    }
    if (numbers.filter(num => !isNumber(num)).length > 0) {
      throw new Error(ERROR.NOT_A_NUMBER);
    }
    if (!isValidRange(numbers, 1, 45)) {
      throw new Error(ERROR.NOT_VALID_RANGE);
    }
  }
}

module.exports = Lotto;
