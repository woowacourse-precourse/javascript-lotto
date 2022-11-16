const { ERROR_MESSAGE } = require('../constant');

class NumberValidator {
  static isValidNumber(input) {
    if ([...input].some((number) => isNaN(number)))
      throw new Error(ERROR_MESSAGE.TYPE);
  }

  static isValidRange(input) {
    const validity = [...input].every((number) => number >= 1 && number <= 45);

    if (!validity) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
  }

  static isNoneDuplication(input) {
    if ([...new Set(input)].length !== 6)
      throw new Error(ERROR_MESSAGE.DUPLICATION);
  }
}

module.exports = NumberValidator;
