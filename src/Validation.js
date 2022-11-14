const { ERROR_MESSAGE, LOTTO_PRICE, LOTTO_SIZE } = require("./Constants");

class Validation {
  static checkPurchaseAmount(purchaseAmount) {
    if (this.isOnlyNumber(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.ERROR_MESSAGE_NOTONLY_NUMBER);
    }
    if (!this.isDivided(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.ERROR_MESSAGE_UNDIVIDED);
    }
  }
  static isOnlyNumber(purchaseAmount) {
    return isNaN(purchaseAmount);
  }
  static isDivided(purchaseAmount) {
    const change = purchaseAmount % LOTTO_PRICE;
    return change === 0;
  }
  static checkInputWinnerNumber(winnerNumber) {
    if (!this.isLottoSize(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.ERROR_MESSAGE_SIZE_INVALID);
    }
    if (this.isOnlyNumber(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.ERROR_MESSAGE_NOTONLY_NUMBER);
    }
    if (this.isUniqueNumber(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.ERROR_MESSAGE_NOTUNIQUE_NUMBER);
    }
    if (!this.isNumberInRange(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.ERROR_MESSAGE_NOTINRANGE);
    }
  }
  static isLottoSize(winnerNumber) {
    return winnerNumber.length === LOTTO_SIZE;
  }
  static isUniqueNumber(winnerNumber) {
    return new Set(winnerNumber).size === LOTTO_SIZE;
  }
  static isNumberInRange(winnerNumber) {
    return winnerNumber.every((number) => number >= 1 && number <= 45);
  }
}

module.exports = Validation;
