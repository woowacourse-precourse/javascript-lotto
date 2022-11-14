const { LOTTO_PRICE, LOTTO_INPUT } = require("../utils/Constant");

class Money {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    if (typeof money === "number") {
      throw new Error("Money must be a number");
    }
  }

  getAmount() {
    return this.#money / LOTTO_PRICE;
  }
}

module.exports = Money;
