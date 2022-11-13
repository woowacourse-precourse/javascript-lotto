const PurchaseError = require('./Constants/Messages');

class Purchase {
  constructor(number) {
    this.validate(number);
  }

  validate(number) {
    if (isNaN(number)) {
      throw new Error(PurchaseError.NOT_NUMBER);
    }
    if (number < 0) {
      throw new Error(PurchaseError.MINUS);
    }
    if (number % 1000 !== 0) {
      throw new Error(PurchaseError.NOT_DIVIDED_BY_THOUSAND);
    }
  }
}
module.exports = Purchase;
