const { ERROR } = require("../Utils/constant");
class Amount {
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  validate(amount) {
    if (amount % 1000 > 0) {
      throw new Error(ERROR.AMOUNT_UNIT);
    }
    if (isNaN(amount / 1000)) {
      throw new Error(ERROR.AMOUNT_ISNAN);
    }
    return true;
  }
}
module.exports = Amount;
