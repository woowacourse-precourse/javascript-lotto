const CustomError = require('./CustomError');

class BonusNumberError extends CustomError {
  constructor(message) {
    super(message);
    this.name = 'BonusNumberError';
  }
}

module.exports = BonusNumberError;
