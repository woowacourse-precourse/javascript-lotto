const LottoSystem = require("./LottoSystem");
const Lotto = require("../Lotto");
const Utils = require("../Utils");

class LottoStatistics extends LottoSystem {
  constructor(winningLotto) {
    super();
    if (!winningLotto instanceof Lotto) {
      throw new ReferenceError("[ERROR] param's instance must be Lotto.");
    }
    if (!winningLotto.bonusNumber) {
      throw new ReferenceError("[ERROR] Lotto must have bonus number.");
    }
    this.winningNumbers = winningLotto.numbers;
    this.bonusNumber = winningLotto.bonusNumber;
  }

  createRankCounter(buyingLottos) {
    const filteredRanks = buyingLottos
      .map((buyingLotto) => {
        const matchedCount = this.matchCount(buyingLotto, this.winningNumbers);
        const isMatchedBonus = buyingLotto.includes(this.bonusNumber);
        return this.getRank(matchedCount, isMatchedBonus);
      })
      .filter((rank) => rank !== null);
    return Utils.createCounter(filteredRanks);
  }

  getTotalReward(buyingLottos) {
    const rankCounter = this.createRankCounter(buyingLottos);
    return Object.entries(rankCounter).reduce((total, [rank, count]) => {
      const reward = this.getRewardByRank(rank) * count;
      return total + reward;
    }, 0);
  }

  getProfit(buyingLottos) {
    const totalReward = this.getTotalReward(buyingLottos);
    const cost = buyingLottos.length * this.moneyUnit;
    return (totalReward / cost) * 100;
  }
}

module.exports = LottoStatistics;
