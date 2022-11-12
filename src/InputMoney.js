const Utils = require("./Utils");

class InputMoney {
  constructor(money) {
    this.utils = new Utils();
    this.validate(money);
  }

  validate(money) {
    if (this.validateMoney(money) === false) {
      this.utils.throwError("[ERROR] 유효하지 않은 값을 입력하셨습니다. 다시 확인하세요.");
    }
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
