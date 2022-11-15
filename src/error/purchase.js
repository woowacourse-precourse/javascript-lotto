const Exception = require("./exception");

const { ERROR, UNIT } = require("../utils/constant");

class Purchase extends Exception {
  #input;

  constructor(input) {
    super();

    this.#input = Number(input);
  }
  isZero() {
    return this.#input === 0;
  }

  isNegative() {
    return this.#input < 0;
  }

  isAllowUnit() {
    return this.#input % UNIT.MONETARY !== 0;
  }

  checkInput() {
    if (this.isZero() || this.isNegative() || this.isAllowUnit())
      throw new Error(ERROR.PURCHASE_AMOUNT);
  }
}

module.exports = Purchase;
