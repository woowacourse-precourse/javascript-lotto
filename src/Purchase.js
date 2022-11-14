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
    Purchase.order(moneyValidation.money);
  }

  static order(money) {
    const lottoQuantity = Purchase.calculateQuantity(money);
    Purchase.issue(lottoQuantity);
  }

  static calculateQuantity(money) {
    return Number(money) / 1000;
  }

  static issue(quantity) {
    MissionUtils.Console.print(`${quantity}${Constant.QUANTITY_MESSAGE}`);
    while (quantity > 0) {
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      Purchase.printLotto(lottoNumber);
      quantity -= 1;
    }
  }

  static printLotto(lottoNumber) {
    const issuedLotto = `[${lottoNumber.join(", ")}]`;
    MissionUtils.Console.print(issuedLotto);
  }
}

module.exports = Purchase;
