const Exception = require("../exception/exception");
const { ERROR_MESSAGE } = require("../constants/message");
const { LOTTO_INPUT } = require("../constants/gameCondition");

class MoneyValidator {
  validate(input) {
    if (this.isEmpty(input)) Exception.throwError(ERROR_MESSAGE.IS_EMPTY);
    if (this.isNumber(input)) Exception.throwError(ERROR_MESSAGE.NOT_NUMBER);
    if (!this.isDivideByPrice(input))
      Exception.throwError(ERROR_MESSAGE.CANT_DIVIDE);
    if (this.isOverLimitMoney(input))
      Exception.throwError(ERROR_MESSAGE.MAX_MONEY);
  }

  isEmpty(input) {
    return input.trim() === "";
  }

  isNumber(input) {
    return isNaN(input);
  }

  isDivideByPrice(input) {
    return LOTTO_INPUT.PRICE_REGEX.test(input);
  }

  isOverLimitMoney(input) {
    return input > LOTTO_INPUT.MAX_MONEY;
  }
}

module.exports = MoneyValidator;
