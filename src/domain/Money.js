const { LOTTO_PRICE, LOTTO_INPUT } = require("../constants/gameCondition");
const MoneyValidator = require("../validator/MoneyValidator");

class Money {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = Number(money);
  }

  validate(money) {
    const validator = new MoneyValidator();
    validator.validate(money);
  }

  getAmount() {
    return this.#money / LOTTO_PRICE;
  }
}

module.exports = Money;
