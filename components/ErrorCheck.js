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
    const numRange = Array.from(
      { length: LOTTO_NUMBER.MAX },
      (_, index) => index + BASIC_NUMBER.ONE
    );
    return numbers.some((number) => !numRange.includes(number));
  }

  static isInvalidRange(numbers) {
    if (this.checkValidRange(numbers)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }

  static isDividedBy1000(money) {
    if (money % BASIC_NUMBER.THOUSAND) {
      throw new Error(ERROR_MESSAGE.UNIT_ERROR);
    }
  }

  static isInvalidNumberType(money) {
    const notNumberOnly = /[^0-9]/;
    if (notNumberOnly.test(money)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  }

  static bonusNumberDuplication(winningNumber, bonusNumber) {
    if (winningNumber.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_DUP);
    }
  }

  static winningNumber(numbers) {
    this.hasDuplication(numbers);
    this.isInvalidLength(numbers);
    this.isInvalidRange(numbers);
  }

  static purchase(money) {
    this.isInvalidNumberType(money);
    this.isDividedBy1000(money);
  }

  static bonusNumber(winningNumber, bonusNumber) {
    this.bonusNumberDuplication(winningNumber, bonusNumber);
    this.isInvalidNumberType(bonusNumber);
    this.isInvalidRange([bonusNumber]);
  }
}

module.exports = ErrorCheck;
