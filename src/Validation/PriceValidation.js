const Validation = require('./index');

class PriceValidation extends Validation {
  constructor(answer) {
    super();
    this.answer = answer;
  }

  validate() {}
}

module.exports = PriceValidation;
