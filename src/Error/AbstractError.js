const CustomError = require('./CustomError');

class AbstractError extends CustomError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = AbstractError;
