const MESSAGES = require('../constants');

class Validator {
  static amountValidCheck(amount) {
    Validator.#isBlank(amount);
  }
  static #isBlank(value) {
    if(value === '') throw new Error(MESSAGES.ERROR.isBlank);
    return false;
  }
}

module.exports = Validator;