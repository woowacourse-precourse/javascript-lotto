const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE, VALUE } = require('./lib/constants');
const { sortRandomLotto } = require('./lib/utils/myLottosUtils');

class MyLottos {
  #myLottos = [];

  constructor(purchaseAccount) {
    this.ConsolepurchaseAccount(purchaseAccount);
    this.makeMyLottos(purchaseAccount);
  }

  ConsolepurchaseAccount(purchaseAccount) {
    Console.print(MESSAGE.OUTPUT_PURCHASE_ACCOUNT(purchaseAccount));
  }

  makeRandomLotto() {
    return Random.pickUniqueNumbersInRange(
      VALUE.LOTTO_MIN_NUMBER,
      VALUE.LOTTO_MAX_NUMBER,
      VALUE.LOTTO_NUMBER_COUNT
    );
  }

  makeMyLottos(purchaseAccount) {
    while (purchaseAccount--) {
      this.#myLottos.push(sortRandomLotto(this.makeRandomLotto()));
    }
  }

  getMyLottos() {
    return this.#myLottos;
  }
}

module.exports = MyLottos;
