const CustomError = require('./CustomError');

class AbstractError extends CustomError {
  constructor(message) {
    super(message);
    this.name = 'AbstractError';
  }
}

module.exports = AbstractError;
