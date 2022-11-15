const Validation = require("./Validation.js");
class Purchase {
  #Purchase;

  constructor(inputNumber) {
    Validation.validPurchase(inputNumber);
    this.#Purchase = inputNumber;
  }

  getPurchase() {
    return this.#Purchase;
  }
}

module.exports = Purchase;
