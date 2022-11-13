const { ABSTRACT_ERROR_MESSAGE } = require('../lib/Constants');

class CustomError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.checkAbstract();
  }

  checkAbstract() {
    if (this.isInputConstructor()) {
      throw new Error(ABSTRACT_ERROR_MESSAGE.abstract_class);
    }
  }

  isInputConstructor() {
    return this.constructor === Error;
  }
}

module.exports = CustomError;
