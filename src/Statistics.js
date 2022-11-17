const MissionUtils = require("@woowacourse/mission-utils");

class Statistics {
  #rateOfReturn;

  constructor() {}

  showRateOfReturn() {
    MissionUtils.Console.print(`총 수익률은 ${this.#rateOfReturn}%입니다.`);
  }

  getRateOfReturn(money, revenue) {
    this.#rateOfReturn = (revenue / money) * 100;
    this.#rateOfReturn = Math.floor(this.#rateOfReturn * 100) / 100;
  }
}

module.exports = Statistics;
