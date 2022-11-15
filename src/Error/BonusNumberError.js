const CustomError = require('./CustomError');

class BonusNumberError extends CustomError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = BonusNumberError;
