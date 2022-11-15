const MissionUtils = require("@woowacourse/mission-utils");
const LottoCalculator = require("./LottoCalculator");

const NOT_IN_RANK = "noRank";

class LottoResultManager {
  constructor() {
    this.profitRate = 0;
    this.WinHistoryMessage = "";

    this.winCount = {
      rank1: 0,
      rank2: 0,
      rank3: 0,
      rank4: 0,
      rank5: 0,
    };
  }

  countWin(winRanks) {
    winRanks.forEach((winRank) => {
      if (winRank !== "NOT_IN_RANK") {
        this.winCount[winRank]++;
      }
    });
  }

  makeWinHistoryMessage() {
    this.WinHistoryMessage += `3개 일치 (5,000원) - ${this.winCount.rank5}개
    4개 일치 (50,000원) - ${this.winCount.rank4}개
    5개 일치 (1,500,000원) - ${this.winCount.rank3}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winCount.rank2}개
    6개 일치 (2,000,000,000원) - ${this.winCount.rank1}개`;
  }

  calculateProfitRate(payment) {
    const lottoCalculator = new LottoCalculator();
    lottoCalculator.sumRewards(this.winCount);

    this.profitRate = lottoCalculator.divideProfitBy(payment);
  }

  printResult() {
    MissionUtils.Console.print("당첨통계\n---");
    MissionUtils.Console.print(this.WinHistoryMessage);
    MissionUtils.Console.print(`총 수익률은 ${this.profitRate}%입니다.`);
  }
}

module.exports = LottoResultManager;
