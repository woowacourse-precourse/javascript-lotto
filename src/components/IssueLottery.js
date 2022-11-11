const { Random } = require('@woowacourse/mission-utils');

class IssueLottery {
  setLotteryNumber(purchaseNumber) {
    const results = [];
    while (purchaseNumber !== 0) {
      const lotteries = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedLotteries = this.sortingLottery(lotteries);
      results.push(sortedLotteries);
      purchaseNumber -= 1;
    }
    return results;
  }

  sortingLottery(lotteries) {
    return lotteries.sort((a, b) => a - b);
  }
}

module.exports = IssueLottery;
