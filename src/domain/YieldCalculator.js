const { PRIZE_AMOUNT } = require("../utils/constants");

class YieldCalculator {
  #purchaseAmount;
  #rankCount;

  constructor(purchaseAmount, rankCount) {
    this.#purchaseAmount = purchaseAmount;
    this.#rankCount = rankCount;
  }

  #getPrizeMoney() {
    const prize = [
      PRIZE_AMOUNT.FIRST_RANK,
      PRIZE_AMOUNT.SECOND_RANK,
      PRIZE_AMOUNT.THIRD_RANK,
      PRIZE_AMOUNT.FORTH_RANK,
      PRIZE_AMOUNT.FIFTH_RANK,
    ];

    return this.#rankCount.reduce((acc, currentRank, idx) => {
      return acc + currentRank * prize[idx];
    }, 0);
  }

  getPrizeYield() {
    const prizeMoney = this.#getPrizeMoney();
    return Math.round((prizeMoney / this.#purchaseAmount) * 1000) / 10;
  }
}

module.exports = YieldCalculator;
