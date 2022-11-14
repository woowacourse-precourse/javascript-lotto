const { INVALID_INPUT_ERROR } = require('../constant/Error');

class InvalidInputError extends Error {
  constructor(message) {
    super(message);
    this.name = INVALID_INPUT_ERROR.TITLE;
  }
}

module.exports = InvalidInputError;
