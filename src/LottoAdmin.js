const { Random } = require("@woowacourse/mission-utils");
const Console = require("./Console");

class LottoAdmin {
  static generateLottoAnswer(lottoNum) {
    return Array.from({ length: lottoNum }, () => this.generateLotto());
  }

  static generateLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) =>
      a > b ? 1 : -1
    );
  }

  static getSameNumWithInputLotto(lotto, winNumbers) {
    return lotto.filter((num) => winNumbers.includes(num)).length;
  }

  static getStatisticsStrArr(entries) {
    return entries.map(([key, value]) => key + value + "개").join("\n");
  }

  static printWinStatistics(statistics) {
    const entries = Object.entries(statistics);
    Console.print(this.getStatisticsStrArr(entries));
  }

  static getStatisticsPriceSum(price, statistics) {
    return Object.entries(statistics).reduce(
      (acc, [_, value], idx) => acc + value * price[idx],
      0
    );
  }

  static getMargin(price, [lottos, statistics]) {
    const margin = this.getStatisticsPriceSum(price, statistics);
    const totalLottoPrice = lottos.length * 1000;
    const middle = (margin / totalLottoPrice) * 100;
    return Math.round(middle * 100) / 100;
  }
}

module.exports = LottoAdmin;
