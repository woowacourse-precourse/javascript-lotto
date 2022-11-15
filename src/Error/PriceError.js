const CustomError = require('./CustomError');

class PriceError extends CustomError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = PriceError;
