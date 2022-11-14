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
}

module.exports = LottoAdmin;
