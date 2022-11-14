const InValidInputError = require("../error/InValidInputError");
const { BASIC, INVALID_INPUT } = require("./validator.constants");

class Validator {
  static isValidLottoType(string) {
    if (/^[0-9]+$/.test(string)) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.LOTTO_NOT_NUMBER);
  }

  static isValidLottoRange(numberArr, [min = 1, max = 45]) {
    if (numberArr.every((num) => num >= min && num <= max)) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.LOTTO_RANGE_ERROR);
  }

  static isValidBonusRange(num, [min = 1, max = 45]) {
    if (num >= min && num <= max) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.BOUNUS_RANGE_ERROR);
  }

  static isDuplicatedLotto(string) {
    if (!(new Set(string).size === string.length))
      throw new InValidInputError(BASIC + INVALID_INPUT.LOTTO_DUPLICATED);
    return false;
  }

  static isValidLotto(string) {
    this.isValidLottoType(string) &&
      this.isValidLottoRange(string) &&
      this.isDuplicatedLotto(string);
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

  static isValidPrice(string) {
    return this.isValidPriceType(string) && this.isValidPriceUnit(string);
  }
}

module.exports = Validator;
