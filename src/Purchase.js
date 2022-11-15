const MissionUtils = require("@woowacourse/mission-utils");
const Constant = require("./components/Constant");
const MoneyValidator = require("./components/MoneyValidator");
const Lotto = require("./Lotto");
const BonusNumber = require("./BonusNumber");
const Calculate = require("./components/Calculator");

class Purchase {
  constructor() {
    this.lotteries = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
    this.money = 0;
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine(Constant.ORDER_MESSAGE, (money) =>
      this.validate(money)
    );
  }

  validate(money) {
    this.money = Number(money);
    const moneyValidation = new MoneyValidator(money);
    MissionUtils.Console.print(moneyValidation.money);
    this.order(moneyValidation.money);
  }

  order(money) {
    const lottoQuantity = Purchase.calculateQuantity(money);
    this.issue(lottoQuantity);
  }

  static calculateQuantity(money) {
    return Number(money) / 1000;
  }

  issue(quantity) {
    MissionUtils.Console.print(`${quantity}${Constant.QUANTITY_MESSAGE}`);
    while (quantity > 0) {
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      this.printLotto(lottoNumber);
      quantity -= 1;
    }
    this.inputWinningNumber();
  }

  printLotto(lottoNumber) {
    const issuedLotto = this.sortNumbers(lottoNumber);
    MissionUtils.Console.print(issuedLotto);
  }

  sortNumbers(lottoNumber) {
    let sortedNumbers = lottoNumber.sort((a, b) => a - b);
    this.lotteries.push(sortedNumbers);
    sortedNumbers = `[${sortedNumbers.join(", ")}]`;
    return sortedNumbers;
  }

  inputWinningNumber() {
    MissionUtils.Console.readLine(Constant.WINNING_NUMBER_MESSAGE, (number) =>
      this.validateLotto(number)
    );
  }

  validateLotto(number) {
    MissionUtils.Console.print(number);
    this.createWinnigLotto(number);
  }

  createWinnigLotto(number) {
    this.winningNumber = number.split(",");
    const winnigLotto = new Lotto(this.winningNumber);
    this.inputBonusNumber();
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(Constant.BONUS_NUMBER_MESSAGE, (number) =>
      this.validateBonusNumber(number)
    );
  }

  validateBonusNumber(number) {
    MissionUtils.Console.print(number);
    this.createBonusLotto(number);
  }

  createBonusLotto(number) {
    this.bonusNumber = Number(number);
    const bonusLotto = new BonusNumber(number);
    this.getResult();
  }

  getResult() {
    const calculateResult = new Calculate(
      this.lotteries,
      this.winningNumber,
      this.bonusNumber,
      this.money
    );
    calculateResult.printResult();
    MissionUtils.Console.close();
  }
}

module.exports = Purchase;
