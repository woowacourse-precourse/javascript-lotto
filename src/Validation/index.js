const { ABSTRACT_ERROR_MESSAGE } = require('../lib/Constants');
const AbstractError = require('../Error/AbstractError');

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

  isEmpty() {
    return this.answer === null || this.answer === undefined || this.answer === '';
  }

  static isRangeNumber(number) {
    const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    return !regExp.test(number);
  }
}

module.exports = Validation;
