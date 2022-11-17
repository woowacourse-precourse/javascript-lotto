const ERROR = require('./constants/error');
const { COUNT_OF_LOTTO_NUMBERS, UNIT_OF_AMOUNT, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } = require('./constants/gameSetting');

class Validator {
  static validateTotalPurchaseAmount(totalPurchaseAmount) {
    if (!this.isNaturalNumber(totalPurchaseAmount)) {
      throw new Error(ERROR.NATURAL_NUMBER);
    }

    if (!this.isUnitOfAmount(totalPurchaseAmount)) {
      throw new Error(ERROR.THOUSANDS_NUMBER);
    }
  }

  static validateLottoNumbers(lottoNumbers) {
    if (!this.isSameLottoCount(lottoNumbers)) {
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

  static isUnitOfAmount(value) {
    return value % UNIT_OF_AMOUNT === 0;
  }

  static isBetween1And45(value) {
    return value >= MIN_LOTTO_NUMBER && value <= MAX_LOTTO_NUMBER;
  }

  static isUniqueNumbers(numbers) {
    return numbers.length === new Set(numbers).size;
  }

  static isSameLottoCount(numbers) {
    return numbers.length === COUNT_OF_LOTTO_NUMBERS;
  }
}

module.exports = Validator;
