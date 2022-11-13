const { ABSTRACT_ERROR_MESSAGE } = require('../lib/Constants');

class Input {
  constructor(answer) {
    this.answer = answer;
    this.checkAbstract();
  }

  checkAbstract() {
    if (this.isInputConstructor()) {
      throw new Error(ABSTRACT_ERROR_MESSAGE.abstract_class);
    }
  }

  isInputConstructor() {
    return this.constructor === Input;
  }

  static validate() {
    throw new Error(ABSTRACT_ERROR_MESSAGE.abstract_method);
  }

  static save() {
    throw new Error(ABSTRACT_ERROR_MESSAGE.abstract_method);
  }
}

module.exports = Input;
