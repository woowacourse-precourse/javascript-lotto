const MESSAGES = require('../constants');

class Validator {
  static amountValidCheck(amount) {
    Validator.isBlank(amount);
    Validator.isNotNumber(amount);
  }
  static isBlank(value) {
    if(value === '') throw new Error(MESSAGES.ERROR.isBlank);
  }
  static isNotNumber(value) {
    value = Number(value);
    if(isNaN(value)) throw new Error(MESSAGES.ERROR.isNotNumber);
  }
}

module.exports = Validator;