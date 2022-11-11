const {
  LOTTO_PRICE,
  LOTTO_DIGITS,
  LOTTO_NUM_MIN_RANGE,
  LOTTO_NUM_MAX_RANGE,
} = require("./constants/condition.js");
const { ERROR_MESSAGE } = require("./constants/message.js");

class Validation {
  static validatePurchaseAmount(purchaseAmount) {
    if (!Validation.hasOnlyNumber(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT_TYPE);
    }
    if (Validation.isStartedZero(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.START_WITH_ZERO);
    }
    if (!Validation.isDivisibleByLottoPrice(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.INDIVISIBLE_BY_LOTTO_PRICE);
    }
  }

  static hasOnlyNumber(input, separator = "") {
    if (input) {
      return input
        .split(separator)
        .map((eachLetter) => parseInt(eachLetter, 10))
        .every((number) => !isNaN(number));
    }

    return false;
  }
  static isStartedZero(input) {
    return input.startsWith("0");
  }
  static isDivisibleByLottoPrice(purchaseAmount) {
    const remainder = purchaseAmount % LOTTO_PRICE;

    return remainder === 0;
  }

  static validateLottoNumber(lottoNumbers) {
    if (!Validation.isValidLottoNumberLength(lottoNumbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
    }
    if (!Validation.hasUniqueLottoNumber(lottoNumbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBER);
    }
  }
  static isValidLottoNumberLength(lottoNumbers) {
    return lottoNumbers.length === LOTTO_DIGITS;
  }
  static hasUniqueLottoNumber(lottoNumbers) {
    return new Set(lottoNumbers).size === LOTTO_DIGITS;
  }
  static isValidLottoNumberRange(lottoNumbers) {
    const isValidRange = (number) => {
      return LOTTO_NUM_MIN_RANGE <= number && number <= LOTTO_NUM_MAX_RANGE;
    };

    return lottoNumbers.map(Number).every(isValidRange);
  }

  static validateWinningNumbers(winningNumbers) {
    const winningNumbersArr = winningNumbers.split(",");

    if (!Validation.hasOnlyNumber(winningNumbers, ",")) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT_TYPE);
    }
    if (!Validation.isValidLottoNumberLength(winningNumbersArr)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
    }
    if (!Validation.isValidLottoNumberRange(winningNumbersArr)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
    }
    if (!Validation.hasUniqueLottoNumber(winningNumbersArr)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBER);
    }
  }
}

module.exports = Validation;
