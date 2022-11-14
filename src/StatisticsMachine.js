const { LOTTO_PRIZE_MATCH_COUNT, LOTTO_PRIZE_MONEY } = require("./constants/condition.js");

class StatisticsMachine {
  totalPrizeMoney;
  yieldRatio;
  prizeStatisticsTemplates;

  makeStatisticsData(eachLottoPrize, purchaseAmount) {
    const prizeStatistics = this.getPrizeStatistics(eachLottoPrize);
    this.totalPrizeMoney = this.getTotalPrizeMoney(prizeStatistics);
    this.yieldRatio = this.getYieldRatio(this.totalPrizeMoney, purchaseAmount);
    this.prizeStatisticsTemplates = this.getPrizeStatisticsTemplates(prizeStatistics);
  }

  getPrizeStatistics(eachCalculatedLottoPrize) {
    const prizeStatistics = {
      fifthPlace: 0,
      fourthPlace: 0,
      thirdPlace: 0,
      secondPlace: 0,
      firstPlace: 0,
      fail: 0,
    };

    eachCalculatedLottoPrize.forEach((lottoPrize) => (prizeStatistics[lottoPrize] += 1));

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
    const templates = [
      `${
        LOTTO_PRIZE_MATCH_COUNT.fifthPlace
      }개 일치 (${LOTTO_PRIZE_MONEY.fifthPlace.toLocaleString()}원) - ${
        prizeStatistics.fifthPlace
      }개`,
      `${
        LOTTO_PRIZE_MATCH_COUNT.fourthPlace
      }개 일치 (${LOTTO_PRIZE_MONEY.fourthPlace.toLocaleString()}원) - ${
        prizeStatistics.fourthPlace
      }개`,
      `${
        LOTTO_PRIZE_MATCH_COUNT.thirdPlace
      }개 일치 (${LOTTO_PRIZE_MONEY.thirdPlace.toLocaleString()}원) - ${
        prizeStatistics.thirdPlace
      }개`,
      `${
        LOTTO_PRIZE_MATCH_COUNT.thirdPlace
      }개 일치, 보너스 볼 일치 (${LOTTO_PRIZE_MONEY.secondPlace.toLocaleString()}원) - ${
        prizeStatistics.secondPlace
      }개`,
      `${
        LOTTO_PRIZE_MATCH_COUNT.firstPlace
      }개 일치 (${LOTTO_PRIZE_MONEY.firstPlace.toLocaleString()}원) - ${
        prizeStatistics.firstPlace
      }개`,
    ];

    return templates;
  }
}

module.exports = StatisticsMachine;
