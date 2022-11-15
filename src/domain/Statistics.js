const { PRIZE_MATCH_NUMBER_COUNT, LOTTO_PRIZE_MONEY } = require("../constants/condition.js");

class Statistics {
  totalPrizeMoney;
  yieldRatio;
  prizeStatisticsTemplates;

  makeStatisticsData(eachLottoPrize, purchaseAmount) {
    const prizeStatistics = this.makePrizeStatistics(eachLottoPrize);

    this.totalPrizeMoney = this.calculateTotalPrizeMoney(prizeStatistics);
    this.yieldRatio = this.calculateYieldRatio(this.totalPrizeMoney, purchaseAmount);
    this.prizeStatisticsTemplates = this.calculatePrizeStatisticsTemplates(prizeStatistics);
  }

  makePrizeStatistics(eachLottoPrize) {
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

  calculateTotalPrizeMoney(prizeStatistics) {
    let totalPrizeMoney = 0;

    for (const [prize, count] of Object.entries(prizeStatistics)) {
      const prizeMoney = LOTTO_PRIZE_MONEY[prize] * count;
      totalPrizeMoney += prizeMoney;
    }

    return totalPrizeMoney;
  }

  calculateYieldRatio(totalPrizeMoney, purchaseAmount) {
    if (totalPrizeMoney) {
      return ((totalPrizeMoney / purchaseAmount) * 100).toFixed(1);
    }

    return "0.0";
  }

  calculatePrizeStatisticsTemplates(prizeStatistics) {
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

  getPrizeStatisticsTemplates() {
    return this.prizeStatisticsTemplates;
  }

  getYieldRatio() {
    return this.yieldRatio;
  }
}

module.exports = Statistics;
