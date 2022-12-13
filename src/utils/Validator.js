const MESSAGE = require('../constants/lottoMessage');
const { LOTTO_INFO } = require('../constants/lottoSetting');

class Validator {
  static validateLotto(numbers) {
    if (!Validator.isNumbersLength(numbers)) throw new Error(MESSAGE.ERROR.invalidLength);
    if (!Validator.isNumbersRange(numbers)) throw new Error(MESSAGE.ERROR.invalidDigit);
    if (Validator.isDuplicates(numbers)) throw new Error(MESSAGE.ERROR.duplicateDigit);
    return numbers;
  }

  static isNumbersRange(numbers) {
    return numbers.every(
      digit => this.isNumeric(digit)
        && LOTTO_INFO.minimumDigit <= digit
        && digit <= LOTTO_INFO.maximumDigit,
    );
  }

  static isNumbersLength(numbers) {
    return numbers.length === LOTTO_INFO.digitLength;
  }

  static isDuplicates(numbers) {
    return new Set(numbers).size !== LOTTO_INFO.digitLength;
  }

  static validateBonusRange(digit) {
    if (
      !this.isNumeric(digit)
      || LOTTO_INFO.minimumDigit > digit
      || digit > LOTTO_INFO.maximumDigit
    ) {
      throw new Error(MESSAGE.ERROR.invalidDigit);
    }
    return true;
  }

  static isValidateMoney(money) {
    if (this.isRemain(money)) throw new Error(MESSAGE.ERROR.remainChange);
    if (this.isShortOf(money)) throw new Error(MESSAGE.ERROR.invalidMoney);
    return true;
  }

  static isRemain(money) {
    return money % LOTTO_INFO.eachPrice !== LOTTO_INFO.noChange;
  }

  static isShortOf(money) {
    return money < 1000;
  }

  static isNumeric(value) {
    return /^-?\d+$/.test(value);
  }
}

module.exports = Validator;
