const { RANKING } = require("./utils/Constants");
const Utils = require("./utils/Utils");

class RankingResult {
  rankingResult;
  earningsRate;

  constructor() {
    this.rankingResult = [
      {
        ranking: "FIFTH",
        reward: RANKING.REWARD_FIFTH,
        mathcedCount: RANKING.MATCHEDCOUNT_FIFTH,
        hasBounsNumber: false,
        amount: 0,
      },
      {
        ranking: "FOURTH",
        reward: RANKING.REWARD_FOURTH,
        mathcedCount: RANKING.MATCHEDCOUNT_FOURTH,
        hasBounsNumber: false,
        amount: 0,
      },
      {
        ranking: "THIRD",
        reward: RANKING.REWARD_THIRD,
        mathcedCount: RANKING.MATCHEDCOUNT_THRID,
        hasBounsNumber: false,
        amount: 0,
      },
      {
        ranking: "SECOND",
        reward: RANKING.REWARD_SECOND,
        mathcedCount: RANKING.MATCHEDCOUNT_SECOND,
        hasBounsNumber: true,
        amount: 0,
      },
      {
        ranking: "FIRST",
        reward: RANKING.REWARD_FIRST,
        mathcedCount: RANKING.MATCHEDCOUNT_FIRST,
        hasBounsNumber: false,
        amount: 0,
      },
    ];
  }

  setRankingResult(issuedLotto, winniglotto, bonusLotto) {
    issuedLotto.forEach((lotto) => {
      const matchCount = Utils.getMatchedinWinningNumberCount(
        lotto,
        winniglotto
      );
      const ranking = this.rankingResult.find(
        (rank) =>
          rank.mathcedCount == matchCount &&
          rank.hasBounsNumber == Utils.hasBounsNumber(lotto, bonusLotto)
      );
      ranking ? (ranking.amount += 1) : null;
    });
  }

  setEarningsRate(lottopayment) {
    const totalReward = Utils.getTotalReward(this.rankingResult);
    this.earningsRate = Utils.getEarningsRate(totalReward, lottopayment);
  }
}

module.exports = RankingResult;
