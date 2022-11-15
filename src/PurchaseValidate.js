const { DEFAULT, ERROR } = require("./utils/constant.js");

class PurchaseValudate {
  #input;
  constructor(input) {
    this.#input = input;
    this.check();
  }

  checkNumber() {
    return isNaN(this.#input);
  }

  checkUnit() {
    return this.#input % DEFAULT.MONEY_UNIT === DEFAULT.ZERO;
  }

  checkPositivNumber() {
    return this.#input < DEFAULT.MONEY_UNIT;
  }

  check() {
    if (this.checkNumber() || this.checkPositivNumber())
      throw new Error(ERROR.PURCHASE_ERROR);
    if (!this.checkUnit()) throw new Error(ERROR.PURCHASE_CHARGE);
  }

  getPurchaceAmount() {
    return this.#input;
  }
}

module.exports = PurchaseValudate;
