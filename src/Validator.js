const { rest } = require('./utils/calculator');
const { ERROR_MESSAGES } = require('./common/messages');

class Validator {
  static checkValidMoney(money) {
    if (rest(money) > 0) {
      throw new Error(`${ERROR_MESSAGES.INVALID_MONEY}`);
    }
  }
}

module.exports = Validator;
