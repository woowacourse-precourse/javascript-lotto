const BASIC_NUMBER = require('../constants/basic number');
const ERROR_MESSAGE = require('../constants/error message');
const LOTTO_NUMBER = require('../constants/lotto number');
const { MATCH } = require('../constants/winning number');

class ErrorCheck {
  static hasDuplication(numbers) {
    if (new Set(numbers).size !== MATCH.SIX) {
      throw new Error(ERROR_MESSAGE.DUP_ERROR);
    }
  }

  static isInvalidLength(numbers) {
    if (numbers.length !== MATCH.SIX) {
      throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
    }
  }

  static checkValidRange(numbers) {
    const range = Array.from(
      { length: LOTTO_NUMBER.MAX },
      (_, index) => index + BASIC_NUMBER.ONE
    );
    return numbers.some((number) => !range.has(number));
  }

  static isInvalidRange(numbers) {
    if (this.checkValidRange(numbers)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }

  static checkWinningNumber(numbers) {
    this.hasDuplication(numbers);
    this.isInvalidLength(numbers);
    this.isInvalidRange(numbers);
  }
}

module.exports = ErrorCheck;
