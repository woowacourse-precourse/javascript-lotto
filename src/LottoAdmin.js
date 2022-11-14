const { Random } = require("@woowacourse/mission-utils");
const Console = require("./Console");

class LottoAdmin {
  static generateLottoAnswer(lottoNum) {
    return Array.from({ length: lottoNum }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => (a > b ? 1 : -1))
    );
  }

  static getSameNumWithInputLotto(lotto, winNumbers) {
    return lotto.filter((num) => winNumbers.includes(num)).length;
  }

  static printWinStatistics(winStatistics) {
    Console.print(
      Object.entries(winStatistics)
        .map(([key, value]) => key + value + "개")
        .join("\n")
    );
  }

  static getMargin(price, [lottos, winStatistics]) {
    const margin = Object.keys(winStatistics).reduce(
      (acc, key, idx) => acc + winStatistics[key] * price[idx],
      0
    );
    const totalLottoPrice = lottos.length * 1000;
    const middle = (margin / totalLottoPrice) * 100;
    return Math.round(middle * 100) / 100;
  }
}

module.exports = LottoAdmin;
