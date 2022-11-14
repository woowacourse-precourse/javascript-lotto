const { MONEY, ERROR } = require('./constructor');
const { checkIsNumber, throwErrorMessage } = require('./utils');

class Purchase {
  #purchaseAmount

  constructor(amount) {
    this.validate(amount);
    this.#purchaseAmount = parseInt(amount);
  }

  validate(amount) {
    checkIsNumber(amount);
    
    if (parseInt(amount) % MONEY.PURCHASE_UNIT !== 0) {
      return throwErrorMessage(ERROR.NOT_DIVIDED);
    }
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  getPublishCount() {
    return this.#purchaseAmount / MONEY.PURCHASE_UNIT;
  }
}

module.exports = Purchase;