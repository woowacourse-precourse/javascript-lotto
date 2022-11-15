const { PRICE_ERROR_MESSAGE } = require('../lib/Constants');

const PriceError = require('../Error/PriceError');
const Validation = require('./index');

class PriceValidation extends Validation {
  constructor(answer) {
    super(answer);
    this.answer = answer;
  }

  validate() {
    super.checkEmpty();
    this.checkZero();
    this.checkNumber();
    this.checkUnitNumber();
  }

  checkZero() {
    if (this.isZero()) {
      throw new PriceError(PRICE_ERROR_MESSAGE.not_valid_zero);
    }
    return true;
  }

  isZero() {
    return this.answer === '0';
  }

  checkNumber() {
    if (this.isOnlyNumber()) {
      throw new PriceError(PRICE_ERROR_MESSAGE.not_valid_number);
    }
    return true;
  }

  isOnlyNumber() {
    const regExp = /^[0-9]+$/;
    return !regExp.test(this.answer);
  }

  checkUnitNumber() {
    if (this.isPriceUnitThousand()) {
      throw new PriceError(PRICE_ERROR_MESSAGE.not_valid_unit_number);
    }
    return true;
  }

  isPriceUnitThousand() {
    const price = Number(this.answer);
    return price % 1000 !== 0;
  }
}

module.exports = PriceValidation;
