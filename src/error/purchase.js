const Exception = require("./exception");

const { ERROR, UNIT } = require("../utils/constant");

class PurchaseError extends Exception {
  #input;

  constructor(input) {
    super();

    this.#input = Number(input);
  }
  isZero() {
    return this.#input !== 0 ? UNIT.ALLOW : UNIT.NOT_ALLOW;
  }

  isNegative() {
    return this.#input > 0 ? UNIT.ALLOW : UNIT.NOT_ALLOW;
  }

  isAllowUnit() {
    return this.#input % UNIT.MONETARY === 0 ? UNIT.ALLOW : UNIT.NOT_ALLOW;
  }

  checkInput() {
    if (this.isZero() || this.isNegative() || this.isAllowUnit())
      throw new Error(ERROR.PURCHASE_AMOUNT);
  }
}

module.exports = PurchaseError;
