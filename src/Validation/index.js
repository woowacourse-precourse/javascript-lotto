const { ABSTRACT_ERROR_MESSAGE, COMMON_ERROR_MESSAGE } = require('../lib/Constants');
const { isOneToFourtyFiveRangeNumber } = require('../lib/Utils');
const AbstractError = require('../Error/AbstractError');
const CommonError = require('../Error/CommonError');

class Validation {
  constructor(answer) {
    this.answer = answer;
    this.checkAbstract();
  }

  checkAbstract() {
    if (this.isInputConstructor()) {
      throw new AbstractError(ABSTRACT_ERROR_MESSAGE.abstract_class);
    }
  }

  isInputConstructor() {
    return this.constructor === Validation;
  }

  static validate() {
    throw new AbstractError(ABSTRACT_ERROR_MESSAGE.abstract_method);
  }

  checkEmpty() {
    if (this.isEmpty()) {
      throw new CommonError(COMMON_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }

  isEmpty() {
    return this.answer === null || this.answer === undefined || this.answer === '';
  }

  checkRange() {
    if (isOneToFourtyFiveRangeNumber(this.answer)) {
      throw new CommonError(COMMON_ERROR_MESSAGE.not_valid_range_number);
    }
    return true;
  }
}

module.exports = Validation;
