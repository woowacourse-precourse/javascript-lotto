const { ERROR_MESSAGE, PARAMETERS } = require('./utils/constants');

class Exception {
  checkIsDigit(number) {
    if (!/^\d+$/.test(number)) {
      throw new Error(ERROR_MESSAGE.nonDigitInput);
    }
  }
}

module.exports = Exception;
