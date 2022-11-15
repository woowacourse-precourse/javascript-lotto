const BetterConsole = require('./lib/BetterConsole');
const Lotto = require('./Lotto');
const BonusNumber = require('./BonusNumber');
const Inventory = require('./Inventory');
const Printer = require('./Printer');
const Validator = require('./lib/Validator');
const { MESSAGE } = require('./constant/Constant');

class App {
  #lottos;
  #bonusNumber;
  #inventory;

  play() {
    this.#inventory = new Inventory();
    this.#moneyInputPhase();
  }

  #moneyInputPhase() {
    BetterConsole.readLine(MESSAGE.PLEASE_INPUT_MONEY, (money) => {
      this.#inventory.generateLottoWithMoney(money);
      const lottosData = this.#inventory.getLottosData();
      Printer.printPurchaseMessage(lottosData);
      this.#winLottoInputPhase();
    });
  }
}

module.exports = App;
