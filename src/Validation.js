const { ERROR_MESSAGE, LOTTO_PRICE } = require("./Constants");

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
}

module.exports = Validation;
