const { printError } = require('./Print');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    printError(message);
  }
}

module.exports = ValidationError;
