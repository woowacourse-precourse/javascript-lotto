const { USER_ERROR } = require('../constants/error.constants');

class UserValidation {
  static isInteger(number) {
    if (!Number.isInteger(number)) throw new Error(USER_ERROR.NOT_INTEGER);
  }
  static isPositive(number) {
    if (number < 0) throw new Error(USER_ERROR.NOT_POSITIVE);
  }
  static isDivisible(number) {
    if (number % 1000 !== 0) throw new Error(USER_ERROR.NOT_DIVISIBLE);
  }
  static isUnderMaxInteger(number) {
    if (number > Number.MAX_SAFE_INTEGER) throw new Error(USER_ERROR.OVER_RANGE);
  }
}

module.exports = UserValidation;
