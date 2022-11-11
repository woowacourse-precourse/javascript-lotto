const { ERROR_MESSAGE } = require("./constant/Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (isNaN(numbers.join(""))) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER.NOT_A_NUMBER);
    }

    if (numbers.length != 6) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER.INVALID_LENGTH);
    }

    numbers.map((item) => {
      if (item > 45 || item < 1) {
        throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER.NOT_IN_RANGE);
      }
    });

    let removedDuplication = new Set(numbers);
    removedDuplication = [...removedDuplication];
    if (removedDuplication.length != 6) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER.IS_DUPLICATED);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
