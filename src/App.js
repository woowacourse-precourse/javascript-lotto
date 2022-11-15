const Function = require('./Function');
const Lotto = require('./Lotto');
const Message = require('./Message');
const ReadLine = require('./ReadLine');
const MONEY_UNIT = 1000;
const SPLIT = ',';
const SEPARATE = ', ';


class App {
  message = new Message();
  readLine = new ReadLine();

  static countLotto(inputMoney) {
    return Function.countLotto(inputMoney, MONEY_UNIT);
  }

  static buyLotto(inputMoney) {
    return Lotto.buyLotto(inputMoney);
  }

  static convertToNumberArray(input = '') {
    return input.split(SPLIT).map(Function.convertNumber.bind(Function));
  }

  static lottoResult(lottos, winningLotto, bonus) {
    const lotto = new Lotto(lottos);
    const wonResult = lotto.getResult(winningLotto, bonus);
    const total = Lotto.calculateTotalAmount(wonResult);
    return {wonResult, total};
  }

  static getEarning(principal, earning) {
    return Function.earning(principal, earning);
  }

  printBuy(amount) {
    this.message.print(Message.buy(amount));
  }

  printLottoList(lottos) {
    Function.checkArray(lottos);
    lottos.forEach((lotto) => {
      this.message.print(`[${lotto.join(SEPARATE)}]`);
    });
  }

  printEarning(wonResult) {
    this.message.print(Message.statistics(wonResult));
  }

  printEarningRate(earning) {
    this.message.print(Message.earningRate(earning));
  }

  printResult(wonResult, purchaseAmountUnit, total) {
    this.printEarning(wonResult);
    this.printEarningRate(App.getEarning(purchaseAmountUnit, total));
  }

  exit() {
    this.readLine.close();
  }

  purchaseInput() {
    this.readLine.inputNumber(Message.enterPurchaseAmount(), (purchaseAmountUnit) => {
      const lottos = App.buyLotto(purchaseAmountUnit);
      this.printBuy(App.countLotto(purchaseAmountUnit));
      this.printLottoList(lottos);
      this.winningInput(lottos, purchaseAmountUnit);
    });
  }

  winningInput(lottos, purchaseAmountUnit) {
    this.readLine.inputOriginal(Message.enterWinningNumber(), (winningNumber) => {
      const winningLotto = App.convertToNumberArray(winningNumber);

      this.bonusInput(lottos, winningLotto, purchaseAmountUnit);
    });
  }

  bonusInput(lottos, winningLotto, purchaseAmountUnit) {
    this.readLine.inputNumber(Message.enterBonusNumber(), (bonus) => {
      const { wonResult, total } = App.lottoResult(lottos, winningLotto, bonus);
      this.printResult(wonResult, purchaseAmountUnit, total);
      this.exit();
    });
  }

  play() {
    this.purchaseInput();
  }
}

module.exports = App;