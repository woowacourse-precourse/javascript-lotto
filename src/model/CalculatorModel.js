const initRank = {
  FIFTH: 0,
  FOURTH: 0,
  THIRD: 0,
  SECOND: 0,
  FIRST: 0,
};

class CalculatorModel {
  constructor() {
    this.rank = initRank;
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
    winningList.forEach((list) => {
      const [count, isBonusCorrected] = list;

      switch (count) {
        case 3:
          this.rank.FIFTH += 1;
          break;
        case 4:
          this.rank.FOURTH += 1;
          break;
        case 5:
          isBonusCorrected ? (this.rank.THIRD += 1) : (this.rank.SECOND += 1);
          break;
        case 6:
          this.rank.FIRST += 1;
      }
    });
  }
}

module.exports = CalculatorModel;
