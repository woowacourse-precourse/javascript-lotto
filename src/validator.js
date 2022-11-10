const { ERROR_MESSAGES } = require('./constant/messages');

class Validator {
  validateInput(money) {
    this.validateInputMoney(money);
    this.validateInputMoneyUnit(money);
  }

  validateInputMoney(money) {
    const check = /^[0-9]+$/;
    if (!check.test(money))
      throw Error(ERROR_MESSAGES.INPUT_TYPE_MUST_BE_NUBMER);
  }

  validateInputMoneyUnit(money) {
    if (parseInt(money, 10) % 1000 !== 0)
      throw Error(ERROR_MESSAGES.MONEY_MUST_BE_DIVIDED_INTO_1000);
  }
}

module.exports = Validator;
