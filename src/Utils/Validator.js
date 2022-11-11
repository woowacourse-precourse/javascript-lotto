const MESSAGES = require('../constants');

class Validator {
  static amountValidCheck(amount) {
    Validator.isBlank(amount);
    Validator.hasBlank(amount);
    Validator.isNotNumber(amount);
  }
  static isBlank(value) {
    if(value === '') return MESSAGES.ERROR.isBlank;
  }
  static isNotNumber(value) {
    value = Number(value);
    if(isNaN(value)) return MESSAGES.ERROR.isNotNumber;
  }
  static hasBlank(value) {
    const regex = /\s/g;    
    if(value.match(regex)) return MESSAGES.ERROR.hasBlank;
  }
}

module.exports = Validator;