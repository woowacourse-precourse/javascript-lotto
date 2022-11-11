const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE, VALUE } = require('./lib/constants');

class MyLottos {
  #myLottos;

  constructor(purchaseAccount) {
    this.validate(purchaseAccount);
    this.ConsolepurchaseAccount(purchaseAccount);
    this.makeMyLottos(purchaseAccount);
  }

  validate(purchaseAccount) {
    if (typeof purchaseAccount !== 'number') {
      throw new Error('[ERROR] 로또의 개수가 숫자가 아닙니다.');
    }
  }

  ConsolepurchaseAccount(purchaseAccount) {
    Console.print(MESSAGE.OUTPUT_PURCHASE_ACCOUNT(purchaseAccount));
  }
}

module.exports = MyLottos;
