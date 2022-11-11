const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

class Lottos {
  constructor(number) {
    this.number = number;
    this.lottos = [];
  }

  issue_one_lotto() {
    let NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const LOTTO = new Lotto(NUMBERS);
    NUMBERS = LOTTO.order_lotto();
    return NUMBERS;
  }

  issue_lottos() {
    for (let i = 0; i < this.number; i++) {
      MissionUtils.Console.print(this.issue_one_lotto());
    }
  }
}

module.exports = Lottos;
