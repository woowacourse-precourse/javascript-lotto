class CalculatorModel {
  #rewardList;

  constructor() {
    this.#rewardList = [5000, 50000, 1500000, 30000000, 2000000000];
  }

  draw(lottos, winning) {
    const winningList = [];

    lottos.forEach((lotto) => {
      const comparedResult = this.getComparedResult(lotto, winning);

      winningList.push(comparedResult);
    });

    return this.getRank(winningList);
  }

  getComparedResult(lotto, winning) {
    const [winningLotto, bonus] = winning;

    let comparedLotto = lotto.compare(winningLotto);
    let comparedBonus = lotto.isContain(bonus);

    const result = [
      comparedBonus ? comparedLotto + 1 : comparedLotto,
      comparedBonus,
    ];

    return result;
  }

  getRank(winningList) {
    const rank = {
      FIFTH: 0,
      FOURTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 0,
    };

    winningList.forEach((list) => {
      this.checkRank(list, rank);
    });

    return this.getReward(rank);
  }

  checkRank(list, rank) {
    const [count, isBonusCorrected] = list;

    switch (count) {
      case 3:
        rank.FIFTH += 1;
        break;
      case 4:
        rank.FOURTH += 1;
        break;
      case 5:
        !isBonusCorrected ? (rank.THIRD += 1) : (rank.SECOND += 1);
        break;
      case 6:
        rank.FIRST += 1;
        break;
    }
  }

  getReward(rank) {
    const reward = Object.values(rank).reduce((acc, cur, idx) => {
      return acc + cur * this.#rewardList[idx];
    }, 0);

    return { rank, reward };
  }

  getRewardRates(reward, money) {
    return ((reward / money) * 100).toFixed(1);
  }
}

module.exports = CalculatorModel;
