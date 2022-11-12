const { CONSTANTS } = require('../constants');

class InputError extends Error {
  constructor(message) {
    super(CONSTANTS.PREFIX + message);
    this.name = 'InputError';
  }
}

module.exports = InputError;
