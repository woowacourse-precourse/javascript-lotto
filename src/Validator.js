const ERROR = require('./constants/error');

class Validator {
  static validateTotalPurchaseAmount(totalPurchaseAmount) {
    if (!this.isNaturalNumber(totalPurchaseAmount)) {
      throw new Error(ERROR.NATURAL_NUMBER);
    }

    if (!this.isThousands(totalPurchaseAmount)) {
      throw new Error(ERROR.THOUSANDS_NUMBER);
    }
  }

  static validateLottoNumbers(lottoNumbers) {
    if (!this.isSixNumbers(lottoNumbers)) {
      throw new Error(ERROR.SIX_NUMBERS);
    }

    if (!this.isUniqueNumbers(lottoNumbers)) {
      throw new Error(ERROR.UNIQUE_NUMBERS);
    }

    lottoNumbers.forEach(this.validateLottoNumber.bind(this));
  }

  static validateLottoNumber(number) {
    if (!this.isNaturalNumber(number)) {
      throw new Error(ERROR.NATURAL_NUMBER);
    }

    if (!this.isBetween1And45(number)) {
      throw new Error(ERROR.BETWEEN_1_TO_45_NUMBERS);
    }
  }

  static isNaturalNumber(value) {
    return /^[1-9][0-9]*$/.test(value);
  }

  static isThousands(value) {
    return value % 1000 === 0;
  }

  static isBetween1And45(value) {
    return value >= 1 && value <= 45;
  }

  static isUniqueNumbers(numbers) {
    return numbers.length === new Set(numbers).size;
  }

  static isSixNumbers(numbers) {
    return numbers.length === 6;
  }
}

module.exports = Validator;
