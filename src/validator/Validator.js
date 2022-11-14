const InValidInputError = require("../error/InValidInputError");
const { BASIC, INVALID_INPUT } = require("./validator.constants");

class Validator {
  static isNumber(string) {
    if (/^[0-9]+$/.test(string)) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.LOTTO_NOT_NUMBER);
  }

  static isRange(numberArr, [min, max]) {
    if (numberArr.every((num) => num >= min && num <= max)) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.RANGE_ERROR);
  }
}

module.exports = Validator;
