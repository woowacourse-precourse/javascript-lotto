const Validator = require('./Validator');

class BonusNumber {
  #value;

  constructor(value) {
    Validator.validateNaN(value);
    Validator.validateNumberRange(value);
    this.#value = value;
  }

  get value() {
    return this.#value;
  }
}

module.exports = BonusNumber;
