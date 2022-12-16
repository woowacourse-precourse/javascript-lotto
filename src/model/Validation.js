const { StringValidator, ArrayValidator } = require('./Validator');

class Validation {
  #checkValue;

  constructor(value) {
    this.#checkValue = value;
  }

  getStringValidator() {
    return new StringValidator(this.#checkValue);
  }

  getArrayValidator() {
    return new ArrayValidator(this.#checkValue);
  }
}

module.exports = Validation;
