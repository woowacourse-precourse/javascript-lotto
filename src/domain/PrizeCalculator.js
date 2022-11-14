const { PRIZE_AMOUNT } = require("../utils/constants");

class PrizeCalculator {
  getPrizeMoney(rank) {
    const prize = [
      PRIZE_AMOUNT.FIRST_RANK,
      PRIZE_AMOUNT.SECOND_RANK,
      PRIZE_AMOUNT.THIRD_RANK,
      PRIZE_AMOUNT.FORTH_RANK,
      PRIZE_AMOUNT.FIFTH_RANK,
    ];

    return rank.reduce((acc, currentRank, idx) => {
      return acc + currentRank * prize[idx];
    }, 0);
  }

  getRateOfReturn(purchaseAmount, prizeMoney) {
    return Math.round((prizeMoney / purchaseAmount) * 1000) / 10;
  }
}

module.exports = PrizeCalculator;
