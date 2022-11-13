const Validation = require('./index');
const { PRICE_ERROR_MESSAGE } = require('../lib/Constants');

class PriceValidation extends Validation {
  constructor(answer) {
    super(answer);
    this.answer = answer;
  }

  validate() {
    this.checkEmpty();
    this.checkNumber();
    this.checkUnitNumber();
  }

  checkEmpty() {
    if (super.isEmpty()) {
      throw new Error(PRICE_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }

  checkNumber() {
    const regExp = /^[0-9]+$/;
    if (!regExp.test(this.answer)) {
      throw new Error(PRICE_ERROR_MESSAGE.not_valid_number);
    }
    return true;
  }

  checkUnitNumber() {
    const price = Number(this.answer);
    if (price % 1000 !== 0) {
      throw new Error(PRICE_ERROR_MESSAGE.not_valid_unit_number);
    }
    return true;
  }
}

module.exports = PriceValidation;
