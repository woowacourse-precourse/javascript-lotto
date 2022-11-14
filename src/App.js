const Application = require('./Application');
const Lotto = require('./Lotto');
const Message = require('./Message');

class App {
  #mesage = new Message();

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
}

module.exports = App;
