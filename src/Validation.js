const { ERROR_MONEY } = require("./constants/messages");

class Validation {
  checkType = (purchaseAmount) => {
    if (isNaN(purchaseAmount)) throw new Error(ERROR_MONEY.TYPE_NUMBER);
  };

  checkNotZero = (purchaseAmount) => {
    if (purchaseAmount === "0") throw new Error(ERROR_MONEY.ZERO);
  };

  checkEmpty = (purchaseAmount) => {
    if (purchaseAmount.length === 0) throw new Error(ERROR_MONEY.EMPTY);
  };

  checkNotThousandUnit = (purchaseAmount) => {
    if (purchaseAmount % 1000 !== 0)
      throw new Error(ERROR_MONEY.NOT_THOUSAND_UNIT);
  };

  checkNegativeInput = (purchaseAmount) => {
    if (purchaseAmount < 0) throw new Error(ERROR_MONEY.NEGATIVE_INPUT);
  };

  isValidMoney = (purchaseAmount) => {
    this.checkNotZero(purchaseAmount);
    this.checkType(purchaseAmount);
    this.checkEmpty(purchaseAmount);
    this.checkNegativeInput(purchaseAmount);
    this.checkNotThousandUnit(purchaseAmount);
    return true;
  };
}

module.exports = Validation;
