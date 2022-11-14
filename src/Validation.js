const { ERROR_MESSAGES, LOTTO } = require("./Constants/Constants");

class Validation {
  static validatePurchaseAmount(purchaseAmount) {
    if (!this.isValidAmountUnit(purchaseAmount)) {
      throw new ERROR(ERROR_MESSAGES.INVALID_AMOUNT_UNIT);
    }
  }

  static isValidAmountUnit(amount) {
    return amount % LOTTO.PRICE === 0;
  }
}

module.exports = Validation;
