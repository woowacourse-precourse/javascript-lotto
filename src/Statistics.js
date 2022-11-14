const { PRIZE_MATCH_NUMBER_COUNT, LOTTO_PRIZE_MONEY } = require("./constants/condition.js");

class Statistics {
  totalPrizeMoney;
  yieldRatio;
  prizeStatisticsTemplates;

  makeStatisticsData(eachLottoPrize, purchaseAmount) {
    const prizeStatistics = this.makePrizeStatistics(eachLottoPrize);

    this.totalPrizeMoney = this.makeTotalPrizeMoney(prizeStatistics);
    this.yieldRatio = this.makeYieldRatio(this.totalPrizeMoney, purchaseAmount);
    this.prizeStatisticsTemplates = this.makePrizeStatisticsTemplates(prizeStatistics);
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

  makeTotalPrizeMoney(prizeStatistics) {
    let totalPrizeMoney = 0;

    for (const [prize, count] of Object.entries(prizeStatistics)) {
      const prizeMoney = LOTTO_PRIZE_MONEY[prize] * count;
      totalPrizeMoney += prizeMoney;
    }

    return totalPrizeMoney;
  }

  makeYieldRatio(totalPrizeMoney, purchaseAmount) {
    if (totalPrizeMoney) {
      return ((totalPrizeMoney / purchaseAmount) * 100).toFixed(1);
    }

    return 0;
  }

  makePrizeStatisticsTemplates(prizeStatistics) {
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

  getPrizeStatisticsTemplate() {
    return this.prizeStatisticsTemplates;
  }

  getYieldRatio() {
    return this.yieldRatio;
  }
}

module.exports = Statistics;
