const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./lib/constants');
const Purchase = require('./Purchase');

class Game {
  #purchaseMoney;

  constructor() {}

  initPurchase(money) {
    this.purchase = new Purchase(money);
    this.#purchaseMoney = this.purchase.getNumberTypeMoney();
  }

  getInputPurchaseMoney() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_MONEY, (money) => {
      this.initPurchase(money);
    });
  }
}

module.exports = Game;
