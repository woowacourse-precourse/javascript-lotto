const Application = require("./Application");
const Lotto = require("./Lotto");
const Text = require("./Text");
const ReadLine = require("./Readline");

class App {
  #text = new Text();

  #readLine = new ReadLine();

  static purchaseCount(userInputNumber) {
    const UNIT_AMOUNT = 1000;
    return Application.purchaseCount(userInputNumber, UNIT_AMOUNT);
  }

  static buyLotto(userInputNumber) {
    return Lotto.buyLotto(userInputNumber);
  }

  static convertToNumberArray(target = "") {
    const SPLITTER = ",";

    return target.split(SPLITTER).map(Application.convertNumber.bind(Application));
  }

  static createLottoResult(lottos, winningNumbers, bonus) {
    const lotto = new Lotto(lottos);
    const winningAmount = lotto.getLottoResult(winningNumbers, bonus);
    const total = Lotto.calculateTotalAmount(winningAmount);

    return {
      winningAmount, total,
    };
  }

  static getEarningsRate(principal, earning) {
    return Application.earningsRate(principal, earning);
  }

  printBuy(amount) {
    this.#text.print(Text.buy(amount));
  }

  printLottoList(lottos) {
    const SEPARATOR = ", ";

    lottos.forEach((lotto) => {
      this.#text.print("["+lotto.join(SEPARATOR)+"]");
    });
  }

  printEarningsRate(winningAmount) {
    this.#text.print(Text.statistics(winningAmount));
  }

  printGrossReturn(earningsRate) {
    this.#text.print(Text.grossReturn(earningsRate));
  }

  printResult(winningAmount, purchaseAmountUnit, total) {
    this.printEarningsRate(winningAmount);
    this.printGrossReturn(App.getEarningsRate(purchaseAmountUnit, total));
  }

  exit() {
    this.#readLine.close();
  }

  firstInput() {
    this.#readLine.inputNumber(Text.enterPurchaseAmount(), (purchaseAmountUnit) => {
      const lottos = App.buyLotto(purchaseAmountUnit);

      this.printBuy(App.purchaseCount(purchaseAmountUnit));
      this.printLottoList(lottos);
      this.secondInput(lottos, purchaseAmountUnit);
    });
  }

  secondInput(lottos, purchaseAmountUnit) {
    this.#readLine.inputOriginal(Text.enterWinningNumber(), (winningNumber) => {
      const winningNumbers = App.convertToNumberArray(winningNumber);

      this.thirdInput(lottos, winningNumbers, purchaseAmountUnit);
    });
  }

  thirdInput(lottos, winningNumbers, purchaseAmountUnit) {
    this.#readLine.inputNumber(Text.enterBonusNumber(), (bonus) => {
      const { winningAmount, total } = App.createLottoResult(lottos, winningNumbers, bonus);

      this.printResult(winningAmount, purchaseAmountUnit, total);
      this.exit();
    });
  }

  play() {
    this.firstInput();
  }
}

module.exports = App;