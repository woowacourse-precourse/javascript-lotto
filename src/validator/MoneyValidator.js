const Exception = require("../exception/exception");
const { ERROR_MESSAGE } = require("../constants/message");
const { LOTTO_INPUT } = require("../constants/gameCondition");

class MoneyValidator {
  validate(input) {
    if (this.isEmpty(input)) Exception.throwError(ERROR_MESSAGE.IS_EMPTY);
    if (this.isNumber(input)) Exception.throwError(ERROR_MESSAGE.NOT_NUMBER);
    if (!this.isDivideByPrice(input))
      Exception.throwError(ERROR_MESSAGE.CANT_DIVIDE);
  }

  isEmpty(input) {
    return input.trim() === "";
  }

  isNumber(input) {
    return isNaN(input);
  }

  isDivideByPrice(input) {
    return LOTTO_INPUT.REGEX.test(input);
  }
}

module.exports = MoneyValidator;
