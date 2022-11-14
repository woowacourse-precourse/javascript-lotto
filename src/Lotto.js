const { MESSAGES, ERROR_MESSAGES } = require('./constants/index');

const MAX_COUNT = 6;
const RANGE = {
  START: 1,
  END: 45,
};
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers = []) {
    if (numbers.length !== MAX_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
    }
    if (numbers.find((number) => number < RANGE.START || number > RANGE.END)) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
    }
    const numberSet = new Set(numbers);
    if (numberSet.size !== MAX_COUNT) {
      throw new Error(ERROR_MESSAGES.NOT_DUPLICATE_NUMBER);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
