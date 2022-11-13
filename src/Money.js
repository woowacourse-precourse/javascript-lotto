const UserError = require("./UserError");

class Money {
  constructor(money) {
    this.money = money;
    this.validate(this.money);
  }

  validate() {
    const error = new UserError();
    error.includingCharactersError(this.money);
    error.validateMoney(this.money);
  }

  divideMoney(money) {
    const count = +money / 1000;
    return count;
  }
}

module.exports = Money;
