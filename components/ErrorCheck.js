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

  static winningNumber(numbers) {
    this.hasDuplication(numbers);
    this.isInvalidLength(numbers);
    this.isInvalidRange(numbers);
  }

  static isDividedBy1000(money) {
    if (money % BASIC_NUMBER.THOUSAND) {
      throw new Error(ERROR_MESSAGE.UNIT_ERROR);
    }
  }

  static isInvalidMoneyType(money) {
    const notNumberOnly = /[^0-9]/g;
    if (notNumberOnly.test(money)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  }

  static purchase(money) {
    this.isInvalidMoneyType(money);
    this.isDividedBy1000(money);
  }
}

module.exports = ErrorCheck;
