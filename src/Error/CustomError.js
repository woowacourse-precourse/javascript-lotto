const { ABSTRACT_ERROR_MESSAGE } = require('../lib/Constants');

class CustomError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.checkAbstract();
  }

  checkAbstract() {
    if (this.isCustomErrorConstructor()) {
      throw new Error(ABSTRACT_ERROR_MESSAGE.abstract_class);
    }
  }

  isCustomErrorConstructor() {
    return this.constructor === CustomError;
  }
}

module.exports = CustomError;
