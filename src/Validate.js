const {
  ERROR_NOT_NUMBER,
  ERROR_NOT_BELONG,
  ERROR_LOWER_1000,
  ERROR_NOT_DIVIDE_1000,
} = require('./Constants');

class Validate {
  validateBonusNumber(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_NOT_NUMBER);
    }
    if (number < 1 || number > 45) {
      throw new Error(ERROR_NOT_BELONG);
    }
  }

  validateMoney(number) {
    if (number < 1000) {
      throw new Error(ERROR_LOWER_1000);
    }
    if (number % 1000 !== 0) {
      throw new Error(ERROR_NOT_DIVIDE_1000);
    }
  }
}

module.exports = Validate;
