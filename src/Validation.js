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
    const winnerNumberArr = winnerNumber.split(",");
    if (this.isOnlyNumber(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.ERROR_MESSAGE_NOTONLY_NUMBER);
    }

    if (this.isUniqueNumber(winnerNumber)) {
      throw new Error(ERROR_MESSAGE.ERROR_MESSAGE_NOTUNIQUE_NUMBER);
    }
  }
  static isUniqueNumber(winnerNumber) {
    return new Set(winnerNumber).size === LOTTO_SIZE;
  }
}

module.exports = Validation;
