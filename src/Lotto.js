const Util = require("./Util");
const {
  LOTTO_LENGTH,
  LOTTO_START,
  LOTTO_END,
  ERROR_MESSAGE,
} = require("./domain/constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    if (typeof numbers === "string") {
      this.validateWinningNumbers(numbers);
      numbers = this.winningNumbersToArray(numbers);
    }
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!Util.isBetween(numbers, LOTTO_START, LOTTO_END)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_LOTTO);
    }
    if (Util.hasDuplicateElements(numbers)) {
      throw new Error(ERROR_MESSAGE.HAS_DUPLICATE_NUMBERS);
    }
    if (!Util.hasNElements(numbers, LOTTO_LENGTH)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH_LOTTO);
    }
  }

  getLottoNumbers() {
    return this.#numbers ? this.#numbers : [];
  }

  validateWinningNumbers(str) {
    const NUMBER_COMMA_REGEXP = /^[0-9,]+$/;
    const START_IS_COMMA_REGEXP = /^[,]/;
    const END_IS_COMMA_REGEXP = /[,]$/;
    const DUPLICATE_COMMA_REGEXP = /[,]{2,}/;

    if (
      !NUMBER_COMMA_REGEXP.test(str) ||
      DUPLICATE_COMMA_REGEXP.test(str) ||
      START_IS_COMMA_REGEXP.test(str) ||
      END_IS_COMMA_REGEXP.test(str)
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    }
  }

  winningNumbersToArray(winningNumbers) {
    const winningNumbersArr = winningNumbers.split(",");
    return winningNumbersArr.map((num) => parseInt(num));
  }
}

module.exports = Lotto;
