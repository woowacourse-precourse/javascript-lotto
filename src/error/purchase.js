const { ERROR, UNIT } = require("../utils/constant");
const Exception = require("./exception");

class PurchaseError extends Exception {
  #input;

  constructor(input) {
    super();

    this.#input = input;
  }

  isAllowAmount() {
    return Number(this.#input) % UNIT.MONETARY === 0 ? false : true;
  }

  checkInput() {
    if (this.isAllowAmount()) throw new Error(ERROR.PURCHASE_AMOUNT);
  }
}

module.exports = PurchaseError;
