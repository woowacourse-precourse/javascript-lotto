const initRank = {
  FIFTH: 0,
  FOURTH: 0,
  THIRD: 0,
  SECOND: 0,
  FIRST: 0,
};

class CalculatorModel {
  #rewardList;

  constructor() {
    this.#rewardList = [5000, 50000, 1500000, 30000000, 2000000000];
  }

  draw(lottos, winning) {
    const [winningLotto, bonus] = winning;
    const winningList = [];

    lottos.forEach((lotto) => {
      let comparedLotto = lotto.compare(winningLotto);
      let comparedBonus = lotto.isContain(bonus);

      const result = [
        comparedBonus ? comparedLotto + 1 : comparedLotto,
        comparedBonus,
      ];

      winningList.push(result);
    });

    return this.getRank(winningList);
  }

  getRank(winningList) {
    const rank = initRank;

    winningList.forEach((list) => {
      const [count, isBonusCorrected] = list;

      switch (count) {
        case 3:
          rank.FIFTH += 1;
          break;
        case 4:
          rank.FOURTH += 1;
          break;
        case 5:
          isBonusCorrected ? (rank.THIRD += 1) : (rank.SECOND += 1);
          break;
        case 6:
          rank.FIRST += 1;
      }
    });

    return this.getReward(rank);
  }

  getReward(rank) {
    const reward = Object.values(rank).reduce((acc, cur, idx) => {
      return acc + cur * this.#rewardList[idx];
    }, 0);

    return { rank, reward };
  }
}

module.exports = CalculatorModel;
