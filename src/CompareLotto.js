const { RANK, UNIT } = require("./utils/constant");

class CompareLotto {
  constructor(userLotto, winNumber, bonusNumber) {
    this.userLotto = userLotto;
    this.winNumber = winNumber;
    this.bonusNumber = bonusNumber;
    this.compareNumber = 8;
    this.ranking = {};
  }

  saveResult(calculatedValue, correctBonus) {
    switch (calculatedValue) {
      case 2:
        return RANK.FIRST;
      case 3:
        if (correctBonus) {
          return RANK.SECOND;
        }
        return RANK.THIRD;
      case 4:
        return RANK.FOURTH;
      case 5:
        return RANK.FIFTH;
    }
  }

  cntCorrect(lotto) {
    let cnt = 0;
    let isBonus = false;
    lotto.forEach((number) => {
      if (this.winNumber.includes(number)) cnt += 1;
      if (number === Number(this.bonusNumber)) {
        isBonus = true;
      }
    });
    return [cnt, isBonus];
  }

  compare() {
    Object.keys(RANK)
      .slice(0, 5)
      .forEach((number) => {
        this.ranking[number] = 0;
      });
    this.userLotto.forEach((lotto) => {
      const [correctCnt, correctBonus] = this.cntCorrect(lotto);
      const calculatedValue = this.compareNumber - correctCnt;
      if (correctCnt >= UNIT.MIN_CNT) {
        this.ranking[this.saveResult(calculatedValue, correctBonus)] += 1;
      }
    });
    return this.ranking;
  }
}

module.exports = CompareLotto;
