const CustomError = require('./CustomError');

class WinNumberError extends CustomError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = WinNumberError;
