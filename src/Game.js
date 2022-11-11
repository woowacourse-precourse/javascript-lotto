const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./lib/constants');
const MyLottos = require('./MyLottos');
const Purchase = require('./Purchase');

class Game {
  #purchaseMoney;
  #myLottosArray;
  #purchaseAccount;

  constructor() {}

  initPurchase(money) {
    this.purchase = new Purchase(money);
    this.#purchaseMoney = this.purchase.getNumberTypeMoney();
    this.#purchaseAccount = this.purchase.getPurchaseAccount();
  }

  initMyLottos() {
    this.myLottos = new MyLottos(this.#purchaseAccount);
    this.#myLottosArray = this.myLottos.getMyLottos();
  }

  printMyLottosArray() {
    this.#myLottosArray.forEach((item) => {
      Console.print(item);
    });
  }

  getInputPurchaseMoney() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_MONEY, (money) => {
      this.initPurchase(money);
      this.initMyLottos();
      this.printMyLottosArray();
    });
  }
}

module.exports = Game;
