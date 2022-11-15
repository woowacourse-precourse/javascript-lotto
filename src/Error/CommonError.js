const CustomError = require('./CustomError');

class CommonError extends CustomError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = CommonError;
