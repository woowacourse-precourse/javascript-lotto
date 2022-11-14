const InValidInputError = require("../error/InValidInputError");
const { BASIC, INVALID_INPUT } = require("./validator.constants");

class Validator {
  static isInvalidLottoType(string) {
    if (/^[0-9]+$/.test(string)) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.LOTTO_NOT_NUMBER);
  }

  static isRange(numberArr, [min, max]) {
    if (numberArr.every((num) => num >= min && num <= max)) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.RANGE_ERROR);
  }

  static isDuplicated(string) {
    if (!(new Set(string).size === string.length))
      throw new InValidInputError(BASIC + INVALID_INPUT.LOTTO_DUPLICATED);
    return false;
  }

  static isValidPriceType(string) {
    if (/^[0-9]+$/.test(string)) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.PRICE_NOT_NUMBER);
  }

  static isThousandUnit(string) {
    return Number(string) % 2 === 0;
  }

  static isValidPriceUnit(string) {
    if (!this.isValidPriceType(string) && this.isThousandUnit(string))
      return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.PRICE_UNIT);
  }
}

module.exports = Validator;
