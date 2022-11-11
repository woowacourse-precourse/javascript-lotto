const MESSAGES = require('../constants');

class Validator {
  static amountValidCheck(amount) {
    Validator.isBlank(amount);
    Validator.hasBlank(amount);
    amount = Number(amount);
    Validator.isNotNumber(amount);
    Validator.isNotKilo(amount);
    return amount;
  }
  static isBlank(value) {
    if(value === '') throw new Error(MESSAGES.ERROR.isBlank);
  }
  static hasBlank(value) {
    const regex = /\s/g;    
    if(value.match(regex)) throw new Error(MESSAGES.ERROR.hasBlank);
  }
  static isNotNumber(value) {
    if(isNaN(value)) throw new Error(MESSAGES.ERROR.isNotNumber);
  }
  static isNotKilo(value) {
    if(value % 1000 !== 0) throw new Error(MESSAGES.ERROR.isNotKilo);
  }
}

module.exports = Validator;