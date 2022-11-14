const Validator = require('./Validator');

class LottoNumber {
  #value;

  constructor(value) {
    Validator.validateNaN(value);
    Validator.validateNumberRange(value);
    this.#value = Number(value);
  }

  get value() {
    return this.#value;
  }
}

module.exports = LottoNumber;
