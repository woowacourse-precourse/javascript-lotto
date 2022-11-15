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
    const count = +money / 1000;
    return count;
  }
}

module.exports = Money;
