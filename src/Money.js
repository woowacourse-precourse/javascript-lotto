const { EXCEPTION_MONEY } = require("./constants/constants");

const MONEY_UNIT = 1000;

class Money {
  #money;

  constructor(money) {
    this.#money = money;
    this.validate(money);
  }

  validate(money) {
    if (isNaN(money)) {
      throw new Error(EXCEPTION_MONEY.INPUT_INTEGER);
    }
    if (money < MONEY_UNIT) {
      throw new Error(EXCEPTION_MONEY.INPUT_ERROR);
    }
    if (Number(money) % MONEY_UNIT !== 0) {
      throw new Error(EXCEPTION_MONEY.MONEY_UNIT_INCORRECT);
    }
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = Money;
