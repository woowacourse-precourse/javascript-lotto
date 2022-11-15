const { Console, Random } = require('@woowacourse/mission-utils');
const { COMMAND } = require('../util/Message');
const {
  MONEY_UNIT,
  LOTTO_NUM,
  RANGE_START,
  RANGE_END,
} = require('../util/constants');

class CreateLotto {
  constructor(money) {
    this.lottoArr = [];
    this.money = parseInt(money);
    this.lottoNum = this.money / MONEY_UNIT;
  }

  make() {
    this.start();
    this.create();
    return this.lottoArr;
  }

  start() {
    Console.print(`\n${this.lottoNum.toString()}${COMMAND.LOTTONUM}`);
  }

  create() {
    while (this.lottoNum) {
      const lotto = Random.pickUniqueNumbersInRange(
        RANGE_START,
        RANGE_END,
        LOTTO_NUM
      );
      lotto.sort((a, b) => {
        return a - b;
      });
      this.save(lotto);
      this.lottoNum -= 1;
    }
  }

  save(lotto) {
    this.lottoArr.push(lotto);
    Console.print(`[${lotto.join(', ')}]`);
  }
}

module.exports = CreateLotto;
