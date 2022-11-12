const Validation = require('./index');
const { PRICE_ERROR_MESSAGE } = require('../lib/Constants');

class PriceValidation extends Validation {
  constructor(answer) {
    super();
    this.answer = answer;
  }

  validate() {
    this.checkIsEmpty();
  }

  checkIsEmpty() {
    if (this.answer === null || this.answer === undefined || this.answer === '') {
      throw new Error(PRICE_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }
}

module.exports = PriceValidation;
