const UserError = require("./UserError");

class Money {
  constructor(money) {
    this.money = money;
    this.validate(this.money);
  }

  validate(money) {
    const error = new UserError();
    error.includingCharactersError(money);
    error.validateMoney(money);
  }

  divideMoney(money) {
    const MONEY_MIN = 1000;
    const count = +money / MONEY_MIN;
    return count;
  }
}

module.exports = Money;
