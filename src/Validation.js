const { LOTTO, REGEX } = require('./constant/Lotto');
const { ERROR_MESSAGE } = require('./constant/Error');
const InvalidInputError = require('./error/InvalidInputError');

class Validation {
  static throwException(error, message) {
    throw new error(message);
  }
}

module.exports = Validation;
