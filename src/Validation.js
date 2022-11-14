const { LOTTO, REGEX } = require('./constant/Lotto');
const { ERROR_MESSAGE } = require('./constant/Error');
const InvalidInputError = require('./error/InvalidInputError');

class Validation {
  static validateLottoNumber(numbers) {
    if (!this.isNumber(numbers)) this.throwException(InvalidInputError, ERROR_MESSAGE.NOT_A_NUMBER);
    if (numbers.length !== LOTTO.LENGTH)
      this.throwException(InvalidInputError, ERROR_MESSAGE.NOT_SIX_NUMBERS);
    if (!this.isInRange(numbers, LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER))
      this.throwException(InvalidInputError, ERROR_MESSAGE.OUT_OF_RANGE);
    if (!this.isUnique(numbers))
      this.throwException(InvalidInputError, ERROR_MESSAGE.NOT_UNIQUE_NUMBER);
  }
  static throwException(error, message) {
    throw new error(message);
  }
  static isNumber(list) {
    return REGEX.NUMBER.test(list.join(''));
  }
  static isInRange(list, min, max) {
    return list.every((num) => Number(num) >= min && Number(num) <= max);
  }
  static isUnique(list) {
    return new Set(list).size === list.length;
  }
}

module.exports = Validation;
