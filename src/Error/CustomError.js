const { ABSTRACT_ERROR_MESSAGE, ERROR_CODE } = require('../lib/Constants');

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR_CODE} ${message}`);
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
