const { ERROR_MESSAGE } = require('../constant');

class NumberValidator {
  static isValidNumber(input) {
    if ([...input].some((number) => isNaN(number)))
      throw new Error(ERROR_MESSAGE.TYPE);
  }

  static isNoneDuplication(input) {
    if ([...new Set(input)].length !== 6)
      throw new Error(ERROR_MESSAGE.DUPLICATION);
  }
}

module.exports = NumberValidator;
