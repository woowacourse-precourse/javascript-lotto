const { Console, Random } = require('@woowacourse/mission-utils');
const COMMAND = require('../util/Message');

class CreateLotto {
  constructor(money) {
    this.money = parseInt(money);
    this.lottoNum = this.money / 1000;
  }

  make() {
    this.start();
    this.create();
  }

  start() {
    Console.print('\n' + this.lottoNum.toString() + COMMAND.LOTTONUM);
  }

  create() {
    while (this.lottoNum) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort((a, b) => {
        return a - b;
      });
      this.lottoNum -= 1;
    }
  }
}

module.exports = CreateLotto;
