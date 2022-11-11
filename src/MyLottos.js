const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./lib/constants');

class MyLottos {
  #purchaseAccount;
  #myLottos;

  constructor(purchaseMoney) {
    this.ConsolepurchaseAccount(purchaseMoney / 1000);
    this.#purchaseAccount = purchaseMoney / 1000;
    this.#myLottos = [];
  }

  ConsolepurchaseAccount(purchaseAccount) {
    Console.print(MESSAGE.OUTPUT_PURCHASE_ACCOUNT(purchaseAccount));
  }
}

module.exports = MyLottos;
