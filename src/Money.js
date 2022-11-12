const { ERROR } = require("./constants/messges");
const { MONEY } = require("./constants/values");

class Money {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    this.checkNumber(money);
    this.checkUnit(money);
  }

  checkNumber(money) {
    if (isNaN(money)) {
      throw new Error(ERROR.MONEY_NUMBER);
    }
  }

  checkUnit(money) {
    if (parseInt(money, 10) % MONEY.UNIT !== 0) {
      throw new Error(ERROR.MONEY_UNIT);
    }
  }
}

module.exports = Money;
