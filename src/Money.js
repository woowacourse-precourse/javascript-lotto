const { ERROR } = require("./constants/messges");

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
    const UNIT = 1000;
    if (parseInt(money, 10) % UNIT !== 0) {
      throw new Error(ERROR.MONEY_UNIT);
    }
  }
}

module.exports = Money;
