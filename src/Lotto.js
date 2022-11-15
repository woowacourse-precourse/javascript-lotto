const { ERROR } = require('./lib/constants');
const {
  checkWinningNumbersLength,
  checkWinningNumbersDuplication,
  checkWinningNumbersRange,
} = require('./lib/utils/LottoUtils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (checkWinningNumbersLength(numbers)) {
      throw new Error(ERROR.LOTTO_LENGTH_ERROR);
    }

    if (checkWinningNumbersDuplication(numbers)) {
      throw new Error(ERROR.DUPLICATE_LOTTO_ERROR);
    }

    if (!checkWinningNumbersRange(numbers)) {
      throw new Error(ERROR.INCORRECT_RANGE_ERROR);
    }
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
