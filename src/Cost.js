const MissionUtils = require('@woowacourse/mission-utils');

class Cost {
  #cost;

  constructor(cost) {
    this.getCost();
    this.validate(cost);
    this.#cost = cost;
  }

  getCost() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (x) => {
      this.#cost = x;
    });
    MissionUtils.Console.close();
  }

  validate(cost) {
    if (cost % 1_000 !== 0) {
      throw new Error('[ERROR]');
    }
  }
}

module.exports = Cost;
