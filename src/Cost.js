const MissionUtils = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE, ERROR_MESSAGE } = require('./constant/constant');

class Cost {
  #cost;

  constructor(cost) {
    this.getCost();
    this.validate(cost);
    this.#cost = cost;
  }

  getCost() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.COST, (x) => {
      this.#cost = x;
    });
    MissionUtils.Console.close();
  }

  validate(cost) {
    if (cost % 1_000 !== 0) {
      throw new Error(ERROR_MESSAGE.COST);
    }
  }
}

module.exports = Cost;
