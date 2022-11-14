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

  getRankHelper(buyingLotto) {
    const matchedCount = this.matchCount(buyingLotto, this.winningNumbers);
    const isMatchedBonus = buyingLotto.includes(this.bonusNumber);
    return this.getRank(matchedCount, isMatchedBonus);
  }

  createRankCounter(buyingLottos) {
    const filteredRanks = buyingLottos
      .map((buyingLotto) => {
        return this.getRankHelper(buyingLotto);
      })
      .filter((rank) => rank !== null);
    return Utils.createCounter(filteredRanks);
  }

  getTotalReward(buyingLottos) {
    return buyingLottos.reduce((total, buyingLotto) => {
      const rank = this.getRankHelper(buyingLotto);
      const reward = this.getRewardByRank(rank);
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
