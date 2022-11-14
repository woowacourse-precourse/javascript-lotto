const Constant = require("./Constant");

class MoneyValidator {
  constructor(money) {
    this.money = money;
    this.validateUnit(money);
  }

  validateUnit() {
    if (this.money % 1000 !== 0) {
      throw new Error(Constant.UNIT_ERROR);
    }
  }
}

module.exports = MoneyValidator;
