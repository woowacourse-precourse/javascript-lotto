const MissionUtils = require("@woowacourse/mission-utils");

class Statistics {
  #rateOfReturn;

  constructor() {}

  getRateOfReturn(money, revenue) {
    this.#rateOfReturn = (revenue / money) * 100;
  }
}

module.exports = Statistics;
