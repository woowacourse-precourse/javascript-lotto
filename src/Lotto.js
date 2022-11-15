const { EXCEPTION_MESSAGE } = require("./constants/constants");

class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(EXCEPTION_MESSAGE.INPUT_LENGTH_ERROR);
    }
    if (!numbers.every((e) => e >= 1 && e <= 45)) {
      throw new Error(EXCEPTION_MESSAGE.INPUT_ERROR);
    }
    if (!numbers.every((e) => Number.isInteger(e))) {
      throw new Error(EXCEPTION_MESSAGE.INPUT_INTEGER);
    }
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error(EXCEPTION_MESSAGE.INPUT_OVERLAPPED);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
