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

  static lottoNumbers(lottoNumbers) {
    if (lottoNumbers.length !== 6) {
      throw new CustomError(ERROR_CODE.WRONG_COUNT);
    }

    if (lottoNumbers.some((number) => number < 1 || number > 45)) {
      throw new CustomError(ERROR_CODE.OUT_OF_RANGE);
    }

    if (lottoNumbers.length !== new Set(lottoNumbers).size) {
      throw new CustomError(ERROR_CODE.DUPLICATED);
    }
  }
}

module.exports = Validator;
