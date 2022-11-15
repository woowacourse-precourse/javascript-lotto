const rewards = [2000000000, 30000000, 1500000, 50000, 5000];

class LottoCalculator {
  constructor() {
    this.totalProfit = 0;
  }

  sumRewards(winCount) {
    const ranks = Object.keys(winCount);

    const rewardSum = ranks.reduce((sum, rank, rankIndex) => {
      sum += winCount[rank] * rewards[rankIndex];
      return sum;
    }, 0);

    this.totalProfit = rewardSum;
  }

  divideProfitBy(payment) {
    return ((this.totalProfit / payment) * 100).toFixed(1);
  }
}

module.exports = LottoCalculator;
