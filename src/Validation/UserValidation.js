const { USER_ERROR } = require("../Constant");

class UserValidation {
  static isNumber(number) {
    if (isNaN(number)) {
      throw new Error(USER_ERROR.NOT_A_NUMBER);
    }
  }
  static isDivisible(number) {
    number = Number(number);
    if (number % 1000 !== 0) {
      throw new Error(USER_ERROR.NOT_DIVISIBLE);
    }
  }

  static isUnderMaxPurchase(number) {
    number = Number(number);
    if (!Number.isSafeInteger(number)) {
      throw new Error(USER_ERROR.TOO_LARGE);
    }
  }

  static isPositiveInteger(number) {
    number = Number(number);
    if (number > 0 && Number.isInteger(number)) {
      return true;
    }
    throw new Error(USER_ERROR.NOT_POSITIVE_INTEGER);
  }
}

module.exports = UserValidation;
