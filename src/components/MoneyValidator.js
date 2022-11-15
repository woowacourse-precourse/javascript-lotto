const Constant = require("./Constant");

class MoneyValidator {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    if (!Number(money)) {
      throw new Error(Constant.TYPE_ERROR);
    }

    if (money % 1000 !== 0) {
      throw new Error(Constant.UNIT_ERROR);
    }

    if (Number(money) <= 0) {
      throw new Error(Constant.POSITIVE_ERROR);
    }
  }
}

module.exports = MoneyValidator;
