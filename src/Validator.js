const { ERROR } = require("./constants/index");

class Validator {
  checkMoneyValid(money) {
    if (money % 1000 !== 0) {
      this.error(ERROR.INPUT_MONEY);
    }
  }

  checkNumberValid(number) {}

  error(message) {
    throw new Error(message);
  }
}

module.exports = Validator;
