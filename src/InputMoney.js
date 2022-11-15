const Utils = require("./Utils");
const { ERROR_MESSAGES } = require("./Constant");

class InputMoney {
  constructor(money) {
    this.utils = new Utils();
    this.validate(money);
  }

  validate(money) {
    (this.validateMoney(money) === false &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_MONEY));
  }

  validateMoney(inputMoney) {
    return (
      !this.utils.isBlank(inputMoney) &&
      this.utils.isNumber(inputMoney) &&
      this.utils.isThousandUnit(inputMoney) &&
      this.utils.isPositive(inputMoney)
    );
  }
}

module.exports = InputMoney;
