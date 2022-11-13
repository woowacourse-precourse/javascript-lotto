const CustomError = require('./CustomError');

class WinNumberError extends CustomError {
  constructor(message) {
    super(message);
    this.name = 'WinNumberError';
  }
}

module.exports = WinNumberError;
