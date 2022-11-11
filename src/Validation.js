const {
  ERROR_MESSAGE_UNDIVIDED,
  LOTTO_PRICE,
  ERROR_MESSAGE_NOTONLY_NUMBER,
} = require("./constants");

class Validation {
  static checkPurchaseAmount(purchaseAmount) {
    if (!Validation.isDivided(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE_UNDIVIDED);
    }
    if (Validation.isOnlyNumber(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE_NOTONLY_NUMBER);
    }
  }

  static isDivided(purchaseAmount) {
    const change = purchaseAmount % LOTTO_PRICE;
    return change === 0;
  }

  static isOnlyNumber(purchaseAmount) {
    return isNaN(purchaseAmount);
  }
}

module.exports = Validation;
