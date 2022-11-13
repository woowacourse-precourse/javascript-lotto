const CustomError = require('./CustomError');

class PriceError extends CustomError {
  constructor(message) {
    super(message);
    this.name = 'PriceError';
  }
}

module.exports = PriceError;
