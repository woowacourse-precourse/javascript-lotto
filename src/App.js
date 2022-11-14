const Application = require('./Application');
const Lotto = require('./Lotto');
const Message = require('./Message');
const ReadLine = require('./ReadLine');

class App {
  #mesage = new Message();

  #readLine = new ReadLine();

  static purchaseCount(userInputNumber) {
    const UNIT_AMOUNT = 1000;

    return Application.purchaseCount(userInputNumber, UNIT_AMOUNT);
  }

  static buyLotto(userInputNumber) {
    return Lotto.buyLotto(userInputNumber);
  }

  static convertToNumberArray(target = '') {
    const SPLITTER = ',';

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
    this.#mesage.print(Message.buy(amount));
  }

  printLottoList(lottos) {
    Application.validateArray(lottos);

    const SEPARATOR = ', ';

    lottos.forEach((lotto) => {
      this.#mesage.print(`[${lotto.join(SEPARATOR)}]`);
    });
  }

  printEarningsRate(winningAmount) {
    this.#mesage.print(Message.statistics(winningAmount));
  }

  printGrossReturn(earningsRate) {
    this.#mesage.print(Message.grossReturn(earningsRate));
  }

  printResult(winningAmount, purchaseAmountUnit, total) {
    this.printEarningsRate(winningAmount);
    this.printGrossReturn(App.getEarningsRate(purchaseAmountUnit, total));
  }

  exit() {
    this.#readLine.close();
  }

  firstInput() {
    this.#readLine.inputNumber(Message.enterPurchaseAmount(), (purchaseAmountUnit) => {
      const lottos = App.buyLotto(purchaseAmountUnit);

      this.printBuy(App.purchaseCount(purchaseAmountUnit));
      this.printLottoList(lottos);
      this.secondInput(lottos, purchaseAmountUnit);
    });
  }

  secondInput(lottos, purchaseAmountUnit) {
    this.#readLine.inputOriginal(Message.enterWinningNumber(), (winningNumber) => {
      const winningNumbers = App.convertToNumberArray(winningNumber);

      this.thirdInput(lottos, winningNumbers, purchaseAmountUnit);
    });
  }

  thirdInput(lottos, winningNumbers, purchaseAmountUnit) {
    this.#readLine.inputNumber(Message.enterBonusNumber(), (bonus) => {
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
