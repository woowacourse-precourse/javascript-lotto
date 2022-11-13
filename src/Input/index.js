const { ABSTRACT_ERROR_MESSAGE } = require('../lib/Constants');

class Input {
  constructor(answer) {
    this.answer = answer;
    if (this.constructor === Input) {
      throw new Error(ABSTRACT_ERROR_MESSAGE.abstract_class);
    }
  }

  static validate() {
    throw new Error(ABSTRACT_ERROR_MESSAGE.abstract_method);
  }

  static save() {
    throw new Error(ABSTRACT_ERROR_MESSAGE.abstract_method);
  }
}

module.exports = Input;
