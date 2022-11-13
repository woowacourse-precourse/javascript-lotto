const UserError = require("./UserError");

class Money {
  validate(money) {
    const error = new UserError();
    error.includingCharactersError(money);
    error.validateMoney(money);
  }
}

module.exports = Money;
