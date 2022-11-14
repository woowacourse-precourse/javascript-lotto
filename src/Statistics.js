const { PRIZE_MATCH_NUMBER_COUNT, LOTTO_PRIZE_MONEY } = require("./constants/condition.js");

class Statistics {
  totalPrizeMoney;
  yieldRatio;
  prizeStatisticsTemplates;

  makeStatisticsData(eachLottoPrize, purchaseAmount) {
    const prizeStatistics = this.getPrizeStatistics(eachLottoPrize);

    this.totalPrizeMoney = this.getTotalPrizeMoney(prizeStatistics);
    this.yieldRatio = this.getYieldRatio(this.totalPrizeMoney, purchaseAmount);
    this.prizeStatisticsTemplates = this.getPrizeStatisticsTemplates(prizeStatistics);
  }

  getPrizeStatistics(eachLottoPrize) {
    const prizeStatistics = {
      fifthPrize: 0,
      fourthPrize: 0,
      thirdPrize: 0,
      secondPrize: 0,
      firstPrize: 0,
      fail: 0,
    };

    eachLottoPrize.forEach((lottoPrize) => (prizeStatistics[lottoPrize] += 1));

    return prizeStatistics;
  }

  getTotalPrizeMoney(prizeStatistics) {
    let totalPrizeMoney = 0;

    for (const [prize, count] of Object.entries(prizeStatistics)) {
      const prizeMoney = LOTTO_PRIZE_MONEY[prize] * count;
      totalPrizeMoney += prizeMoney;
    }

    return totalPrizeMoney;
  }

  getYieldRatio(totalPrizeMoney, purchaseAmount) {
    if (totalPrizeMoney) {
      return ((totalPrizeMoney / purchaseAmount) * 100).toFixed(1);
    }

    return 0;
  }

  getPrizeStatisticsTemplates(prizeStatistics) {
    const ranks = ["fifthPrize", "fourthPrize", "thirdPrize", "secondPrize", "firstPrize"];

    const templates = ranks.map((rank) => {
      if (rank === "secondPrize") {
        return `${PRIZE_MATCH_NUMBER_COUNT[rank]}개 일치, 보너스 볼 일치 (${LOTTO_PRIZE_MONEY[
          rank
        ].toLocaleString()}원) - ${prizeStatistics[rank]}개`;
      }

      return `${PRIZE_MATCH_NUMBER_COUNT[rank]}개 일치 (${LOTTO_PRIZE_MONEY[
        rank
      ].toLocaleString()}원) - ${prizeStatistics[rank]}개`;
    });

    return templates;
  }
}

module.exports = Statistics;
