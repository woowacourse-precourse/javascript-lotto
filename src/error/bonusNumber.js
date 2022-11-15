const Exception = require("./exception");

const { ERROR, UNIT } = require("../utils/constant");

class BonusNumber extends Exception {
  #input;

  constructor(input) {
    super();

    this.#input = input;
  }

  isDuplicate(comparison) {
    if (comparison.includes(Number(this.#input))) return true;
    return false;
  }

  isAllowNumber() {
    return (
      this.#input < UNIT.MIN_NUMBER ||
      this.#input > UNIT.MAX_NUMBER ||
      isNaN(this.#input)
    );
  }

  checkInput(comparison) {
    if (this.isAllowNumber()) throw new Error(ERROR.BONUS_NUMBER);
    if (this.isDuplicate(comparison))
      throw new Error(ERROR.BONUS_NUMBER_DUPLICATE);
    return true;
  }
}

module.exports = BonusNumber;
