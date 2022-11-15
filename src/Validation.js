const { ERROR_MESSAGE, LOTTO_PRICE, LOTTO_SIZE } = require("./Constants");

class Validation {
  static checkPurchaseAmount(purchaseAmount) {
    const purchaseAmountArr = purchaseAmount.split("");
    if (purchaseAmount.length === 0) {
      throw new Error(ERROR_MESSAGE.NOT_EMPTY_INPUT);
    }
    if (!this.isOnlyNumber(purchaseAmountArr)) {
      throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
    }
    if (!this.isDivided(purchaseAmount)) {
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
    if (!this.isLottoSize(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.SIZE_INVALID);
    }
    if (!this.isOnlyNumber(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
    }
    if (!this.isUniqueWinnerNumber(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_UNIQUE_NUMBER);
    }
    if (!this.isNumberInRange(winnerNumber)) {
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
      return number >= 1 && number <= 45;
    };
    return winnerNumber.map(Number).every(validRange);
  }
  static checkBonusNumber(bonusNumber, winnerNumber) {
    const bonusNumberArr = bonusNumber.split("");
    if (bonusNumber.length === 0) {
      throw new Error(ERROR_MESSAGE.NOT_EMPTY_INPUT);
    }
    if (!this.isOnlyNumber(bonusNumberArr)) {
      throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
    }
    if (!this.isNumberInRange(bonusNumberArr)) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
    if (this.isUniqueBonusNumber(bonusNumber, winnerNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_UNIQUE_NUMBER);
    }
  }
  static isUniqueBonusNumber(bonusNumber, winnerNumber) {
    return winnerNumber.includes(bonusNumber);
  }
  static checkLottoNumber(lottoNumber) {
    if (lottoNumber.length === 0) {
      throw new Error(ERROR_MESSAGE.SIZE_INVALID);
    }
    if (!this.isOnlyNumber(lottoNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_ONLY_NUMBER);
    }
    if (!this.isLottoSize(lottoNumber)) {
      throw new Error(ERROR_MESSAGE.SIZE_INVALID);
    }
    if (!this.isNumberInRange(lottoNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
    }
    if (new Set(lottoNumber).size != LOTTO_SIZE) {
      throw new Error(ERROR_MESSAGE.NOT_UNIQUE_NUMBER);
    }
  }
}

module.exports = Validation;
