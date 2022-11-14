const {
  LOTTO_PRICE,
  LOTTO_DIGITS,
  LOTTO_NUM_MIN_RANGE,
  LOTTO_NUM_MAX_RANGE,
} = require("./constants/condition.js");
const { ERROR_MESSAGE } = require("./constants/message.js");

class Validation {
  static validatePurchaseAmount(purchaseAmount) {
    const purchaseAmountArr = purchaseAmount.split("");

    if (Validation.isEmptyInput(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
    if (!Validation.hasOnlyNumber(purchaseAmountArr)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT_TYPE);
    }
    if (Validation.isStartedZero(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.START_WITH_ZERO);
    }
    if (!Validation.isDivisibleByLottoPrice(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.INDIVISIBLE_BY_LOTTO_PRICE);
    }
  }

  static isEmptyInput(input) {
    return input.length === 0;
  }

  static hasOnlyNumber(input) {
    const isNumber = (number) => !Number.isNaN(number);

    return input.map((eachLetter) => parseInt(eachLetter, 10)).every(isNumber);
  }

  static isStartedZero(purchaseAmount) {
    return purchaseAmount.startsWith("0");
  }

  static isDivisibleByLottoPrice(purchaseAmount) {
    const remainder = parseInt(purchaseAmount, 10) % LOTTO_PRICE;

    return remainder === 0;
  }

  static validateLottoNumber(lottoNumbers) {
    if (Validation.isEmptyInput(lottoNumbers)) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
    if (!Validation.hasOnlyNumber(lottoNumbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT_TYPE);
    }
    if (!Validation.isValidLottoNumberLength(lottoNumbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
    }
    if (!Validation.isValidLottoNumberRange(lottoNumbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
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

  static validateBonusNumber(bonusNumber, winningNumbers) {
    const splittedNumberArr = [...bonusNumber];
    const wholeNumberArr = [bonusNumber];

    if (Validation.isEmptyInput(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
    if (!Validation.hasOnlyNumber(splittedNumberArr)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT_TYPE);
    }
    if (!Validation.isValidLottoNumberRange(wholeNumberArr)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
    }
    if (!Validation.isUniqueBonusNumber(bonusNumber, winningNumbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBER);
    }
  }

  static isUniqueBonusNumber(bonusNumber, winningNumbers) {
    return !winningNumbers.includes(Number(bonusNumber));
  }
}

module.exports = Validation;
