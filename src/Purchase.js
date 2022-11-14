const MissionUtils = require("@woowacourse/mission-utils");
const Constant = require("./components/Constant");
const MoneyValidator = require("./components/MoneyValidator");
const Lotto = require("./Lotto");
const BonusNumber = require("./BonusNumber");

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
    Purchase.inputWinningNumber();
  }

  static printLotto(lottoNumber) {
    const issuedLotto = Purchase.sortNumbers(lottoNumber);
    MissionUtils.Console.print(issuedLotto);
  }

  static sortNumbers(lottoNumber) {
    let sortedNumbers = lottoNumber.sort((a, b) => a - b);
    sortedNumbers = `[${sortedNumbers.join(", ")}]`;
    return sortedNumbers;
  }

  static inputWinningNumber() {
    MissionUtils.Console.readLine(
      Constant.WINNING_NUMBER_MESSAGE,
      Purchase.validateLotto
    );
  }

  static validateLotto(number) {
    MissionUtils.Console.print(number);
    Purchase.createWinnigLotto(number);
  }

  static createWinnigLotto(number) {
    const winningNumber = number.split(",");
    const winnigLotto = new Lotto(winningNumber);
    Purchase.inputBonusNumber();
  }

  static inputBonusNumber() {
    MissionUtils.Console.readLine(
      Constant.BONUS_NUMBER_MESSAGE,
      Purchase.validateBonusNumber
    );
  }

  static validateBonusNumber(number) {
    MissionUtils.Console.print(number);
    Purchase.createBonusLotto(number);
  }

  static createBonusLotto(number) {
    const bonusNumber = new BonusNumber(number);
  }
}

module.exports = Purchase;
