const { purchaseAmountRegex, errMsg } = require('./constants');

class User {
  #purchaseAmout;

  constructor(purchaseAmout) {
    this.validate(purchaseAmout);
    this.#purchaseAmout = purchaseAmout;
  }

  validate(purchaseAmout) {
    if (!purchaseAmountRegex.test(purchaseAmout)) {
      throw new Error(errMsg.invalidPurchaseAmout);
    }
  }
}

module.exports = User;
