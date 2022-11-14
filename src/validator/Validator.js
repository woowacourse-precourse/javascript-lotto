const InValidInputError = require("../error/InValidInputError");
const { BASIC, INVALID_INPUT } = require("./validator.constants");

class Validator {
  static isValidLottoNum(stringArr) {
    if (stringArr.length === 6) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.LOTTO_NUM_ERROR);
  }
  static isValidLottoType(string) {
    if (/^[0-9]+$/.test(string)) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.LOTTO_NOT_NUMBER);
  }
  static isValidLottoRange(numberArr, [min = 1, max = 45]) {
    if (numberArr.every((num) => num >= min && num <= max)) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.LOTTO_RANGE_ERROR);
  }
  static isDuplicatedLotto(numberArr) {
    if (!(new Set(numberArr).size === numberArr.length))
      throw new InValidInputError(BASIC + INVALID_INPUT.LOTTO_DUPLICATED);
    return false;
  }

  static isValidBonusRange(num, [min = 1, max = 45]) {
    if (num >= min && num <= max) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.BOUNUS_RANGE_ERROR);
  }
  static isValidBonus(num) {
    return (
      this.isValidBonusRange(Number(num), [1, 45]) && this.isValidLottoType(num)
    );
  }

  static isValidPriceType(string) {
    if (/^[0-9]+$/.test(string)) return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.PRICE_NOT_NUMBER);
  }
  static isThousandUnit(string, unit = 1000) {
    return Number(string) % unit === 0;
  }
  static isValidPriceUnit(string) {
    if (this.isValidPriceType(string) && this.isThousandUnit(string))
      return true;
    throw new InValidInputError(BASIC + INVALID_INPUT.PRICE_UNIT);
  }
  static isValidPrice(string) {
    return this.isValidPriceType(string) && this.isValidPriceUnit(string);
  }
}

module.exports = Validator;
