const Validator = require("./Validator.js");
class Purchase {
  #Purchase;

  constructor(inputNumber) {
    Validator.validPurchase(inputNumber);
    this.#Purchase = inputNumber;
  }

  getPurchase() {
    return this.#Purchase;
  }
}

module.exports = Purchase;
