const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

module.exports = class PrintResult {
  constructor() {
    this.MY_PRIZE = 0;
    this.lottoRanking = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  }

  lottoStatistics(ranking) {
    if (ranking === 0) return;
    this.lottoRanking[ranking] = this.lottoRanking[ranking] + 1;
    this.MY_PRIZE += lottoPrize[ranking];
  }
  rankingResult() {
    return printRankingResult(this.lottoRanking);
  }

  moneyResult(money) {
    const UNSORTED_PERCENT = (this.MY_PRIZE / money) * 100;
    const PERCENT = (Math.round(UNSORTED_PERCENT * 10) / 10).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${PERCENT}%입니다.`);
  }
  printResult(money) {
    Console.print("\n당첨 통계\n---");
    this.rankingResult();
    this.moneyResult(money);
    Console.close();
  }
};

const lottoPrize = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

function printRankingResult(lottoRanking) {
  Console.print(`3개 일치 (5,000원) - ${lottoRanking[5]}개`);
  Console.print(`4개 일치 (50,000원) - ${lottoRanking[4]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${lottoRanking[3]}개`);
  Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoRanking[2]}개`
  );
  Console.print(`6개 일치 (2,000,000,000원) - ${lottoRanking[1]}개`);
}
