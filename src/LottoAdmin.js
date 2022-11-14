const { Random } = require("@woowacourse/mission-utils");
const Console = require("./Console");
const { LOTTO_RESULT } = require("./constants");

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

  static getStatisticsStrArr(statistics) {
    const ment = Object.values(LOTTO_RESULT);
    return statistics.map((value, idx) => ment[idx] + value + "개").join("\n");
  }

  static printWinStatistics(statistics) {
    Console.print(this.getStatisticsStrArr(statistics));
  }

  static getStatisticsPriceSum(price, ranks) {
    return ranks.reduce((acc, value, idx) => acc + value * price[idx], 0);
  }

  static getMargin(price, [lottos, ranks]) {
    const margin = this.getStatisticsPriceSum(price, ranks);
    const totalLottoPrice = lottos.length * 1000;
    const middle = (margin / totalLottoPrice) * 100;
    return Math.round(middle * 100) / 100;
  }
}

module.exports = LottoAdmin;
