const MESSAGES = require('../constants');

class Validator {
  static amountValidCheck(amount) {
    Validator.isBlank(amount);
    Validator.hasBlank(amount);
    amount = Number(amount);
    Validator.isNotNumber(amount);
  }
  static isBlank(value) {
    if(value === '') return MESSAGES.ERROR.isBlank;
  }
  static hasBlank(value) {
    const regex = /\s/g;    
    if(value.match(regex)) return MESSAGES.ERROR.hasBlank;
  }
  static isNotNumber(value) {
    if(isNaN(value)) return MESSAGES.ERROR.isNotNumber;
  }
  static isNotKilo(value) {
    if(value % 1000 !== 0) return MESSAGES.ERROR.isNotKilo;
  }
}

module.exports = Validator;