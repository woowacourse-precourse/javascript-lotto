const { ERROR, UNIT } = require("../Utils/constant");
class Amount {
  #amount;

  constructor(amount) {
    this.#amount = amount;
    this.validate(this.#amount);
  }

  validate(amount) {
    if (amount % UNIT > 0) {
      throw new Error(ERROR.AMOUNT_UNIT);
    }
    if (isNaN(amount / UNIT)) {
      throw new Error(ERROR.AMOUNT_ISNAN);
    }
  }
}
module.exports = Amount;
