const { Console, Random } = require('@woowacourse/mission-utils');
const COMMAND = require('../util/Message');

class CreateLotto {
  constructor(money) {
    this.money = money;
    this.lottoNum = this.money / 1000;
  }

  make() {
    this.start();
    Console.print(this.create());
  }

  start() {
    Console.print('\n' + this.lottoNum.toString() + COMMAND.LOTTONUM);
  }

  create() {
    let result = {};
    while (this.lottoNum) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      result[this.lottoNum] = lotto;
      this.lottoNum -= 1;
    }
    return result;
  }
}

module.exports = CreateLotto;
