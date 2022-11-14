const { ERROR_CODE, CustomError } = require("./Error");

class Validator {
  static amount(callback) {
    return (amount) => {
      if (amount.trim().length === 0 || isNaN(amount - 0)) {
        throw new CustomError(ERROR_CODE.NOT_NUMBER);
      }

      if (amount % 1000 !== 0) {
        throw new CustomError(ERROR_CODE.WRONG_AMOUNT);
      }

      callback(amount);
    };
  }
}

module.exports = Validator;
