const { purchaseError } = require('./Constants/ErrorMessages');

class Purchase {
  #number;

  constructor(number) {
    this.validate(number);
    this.#number = number;
  }

  validate(number) {
    if (isNaN(number)) {
      throw new Error(purchaseError.NOT_NUMBER);
    }
    if (number < 0) {
      throw new Error(purchaseError.MINUS);
    }
    if (number % 1000 !== 0) {
      throw new Error(purchaseError.NOT_DIVIDED_BY_THOUSAND);
    }
  }
}
module.exports = Purchase;
