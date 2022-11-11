const { Console, Random } = require('@woowacourse/mission-utils');
const { PURCHASE } = require('./constants');
const { validate, isPurchaseInput } = require('./Validator');
const Lotto = require('./Lotto');

class LottoGame {
  #purchaseAmout = 0;

  #lotteries = [];

  start() {
    Console.readLine(PURCHASE.INPUT, answer => {
      validate(answer, isPurchaseInput);

      this.#purchaseAmout = answer;
      this.publishLotteries();
    });
  }

  publishLotteries() {
    const count = this.#purchaseAmout / PURCHASE.UNIT;
    const lotteries = Array.from(
      { length: count },
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)),
    );
    this.#lotteries = lotteries;
  }
}

module.exports = LottoGame;
