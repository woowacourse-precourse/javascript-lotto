const { Console } = require("@woowacourse/mission-utils");
const { RULE, RANK, REWARD } = require("./constants/rule");

class LottoCalculator {
  constructor(winNumbers, boughtNumbers, bonusNumber, lottoAmount) {
    this.winningNumber = winNumbers;
    this.boughtLotto = boughtNumbers;
    this.inputBonus = bonusNumber;
    this.lottoAmount = lottoAmount;
  }

  getLottoResult() {
    const lottoResultList = [];
    this.boughtLotto.forEach((lotto) => {
      lottoResultList.push(
        lotto.getResult(this.winningNumber, this.inputBonus)
      );
    });
    this.compareResult = lottoResultList.filter((result) => result);
  }

  getRankCount(idx) {
    return this.compareResult.filter(
      (result) => result === RULE.RANK_LENGTH - idx
    ).length;
  }

  calcualtePrizeMoney() {
    const prize = [
      REWARD.FIFTH,
      REWARD.FOURTH,
      REWARD.THIRD,
      REWARD.SECOND,
      REWARD.FIRST,
    ];
    return prize.reduce((acc, currentRank, idx) => {
      const rankCount = this.getRankCount(idx);
      return acc + currentRank * rankCount;
    }, 0);
  }

  calculateProfitRate() {
    const totalProfit = this.calcualtePrizeMoney();
    const purchaseMoney = this.lottoAmount * RULE.LOTTO_PRICE;
    return ((totalProfit / purchaseMoney) * 100).toFixed(1);
  }

  printRank() {
    this.getLottoResult();
    const rankList = RANK.LIST;
    rankList.forEach((rank, idx) => {
      const rankCount = this.getRankCount(idx);
      Console.print(`${rank} ${rankCount}개`);
    });
  }

  printProfitRate() {
    const profitRate = this.calculateProfitRate();
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

module.exports = LottoCalculator;
