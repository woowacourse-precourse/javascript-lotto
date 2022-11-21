const {
  ERROR_MESSAGE,
  LOTTO_PRICE,
  LOTTO_SIZE,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
} = require("./Constants");

class Validation {
  static checkPurchaseAmount(purchaseAmount) {
    const purchaseAmountArr = purchaseAmount.split("");
    if (purchaseAmount.length === 0) {
      throw new Error(ERROR_MESSAGE.NOT_EMPTY_INPUT);
    }
    if (!Validation.isOnlyNumber(purchaseAmountArr)) {
      throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
    }
    if (!Validation.isDivided(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.PURCHASEAMOUNT_UNDIVIDED);
    }
  }
  static isOnlyNumber(input) {
    const isNumber = (number) => !Number.isNaN(number);
    return input.map((eachLetter) => parseInt(eachLetter, 10)).every(isNumber);
  }

  static isDivided(purchaseAmount) {
    const change = purchaseAmount % LOTTO_PRICE;
    return change === 0;
  }
  static checkInputWinnerNumber(winnerNumber) {
    if (winnerNumber.length === 0) {
      throw new Error(ERROR_MESSAGE.NOT_EMPTY_INPUT);
    }
    if (!Validation.isLottoSize(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.SIZE_INVALID);
    }
    if (!Validation.isOnlyNumber(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
    }
    if (!Validation.isUniqueWinnerNumber(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_UNIQUE_NUMBER);
    }
    if (!Validation.isNumberInRange(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
  }
  static isLottoSize(winnerNumber) {
    return winnerNumber.length === LOTTO_SIZE;
  }
  static isUniqueWinnerNumber(winnerNumber) {
    return new Set(winnerNumber).size === LOTTO_SIZE;
  }
  static isNumberInRange(winnerNumber) {
    const validRange = (number) => {
      return number >= LOTTO_MIN_NUMBER && number <= LOTTO_MAX_NUMBER;
    };
    return winnerNumber.map(Number).every(validRange);
  }
  static checkBonusNumber(bonusNumber, winnerNumber) {
    const splitBonusNumber = bonusNumber.split("");
    const bonusNumberArr = [bonusNumber];
    if (bonusNumber.length === 0) {
      throw new Error(ERROR_MESSAGE.NOT_EMPTY_INPUT);
    }
    if (!Validation.isOnlyNumber(splitBonusNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
    }
    if (!Validation.isNumberInRange(bonusNumberArr)) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
    if (Validation.isUniqueBonusNumber(bonusNumber, winnerNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_UNIQUE_NUMBER);
    }
  }
  static isUniqueBonusNumber(bonusNumber, winnerNumber) {
    return winnerNumber.includes(Number(bonusNumber));
  }
  static checkLottoNumber(lottoNumber) {
    if (lottoNumber.length === 0) {
      throw new Error(ERROR_MESSAGE.SIZE_INVALID);
    }
    if (!Validation.isOnlyNumber(lottoNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
    }
    if (!Validation.isLottoSize(lottoNumber)) {
      throw new Error(ERROR_MESSAGE.SIZE_INVALID);
    }
    if (!Validation.isNumberInRange(lottoNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
    if (!Validation.isUniqueLottoNumber(lottoNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_UNIQUE_NUMBER);
    }
  }
  static isUniqueLottoNumber(lottoNumber) {
    return new Set(lottoNumber).size === LOTTO_SIZE;
  }
}

module.exports = Validation;
