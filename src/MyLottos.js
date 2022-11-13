const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE, VALUE } = require('./lib/constants');

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

  sortRandomLotto(lottoArray) {
    lottoArray.sort(function (a, b) {
      return a - b;
    });
    return lottoArray;
  }

  makeMyLottos(purchaseAccount) {
    while (purchaseAccount--) {
      this.#myLottos.push(this.sortRandomLotto(this.makeRandomLotto()));
    }
  }

  getMyLottos() {
    return this.#myLottos;
  }
}

module.exports = MyLottos;
