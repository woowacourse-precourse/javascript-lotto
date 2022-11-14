const MissionUtils = require("@woowacourse/mission-utils");
const Constant = require("./components/Constant");
const MoneyValidator = require("./components/MoneyValidator");

class Purchase {
  static inputMoney() {
    MissionUtils.Console.readLine(Constant.ORDER_MESSAGE, Purchase.validate);
  }

  static validate(money) {
    const moneyValidation = new MoneyValidator(money);
    MissionUtils.Console.print(moneyValidation.money);
  }
}

module.exports = Purchase;
