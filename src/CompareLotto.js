const { RANK, UNIT } = require("./utils/constant");

class CompareLotto {
  constructor(userLotto, winNumber, bonusNumber) {
    this.userLotto = userLotto;
    this.winNumber = winNumber;
    this.bonusNumber = bonusNumber;
    this.ranking = {};
  }

  saveResult(correctCnt, correctBonus) {
    switch (correctCnt) {
      case 6:
        return RANK.FIRST;
      case 5:
        if (correctBonus) {
          return RANK.SECOND;
        }
        return RANK.THIRD;
      case 4:
        return RANK.FOURTH;
      case 3:
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
      if (correctCnt >= UNIT.MIN_CNT) {
        this.ranking[this.saveResult(correctCnt, correctBonus)] += 1;
      }
    });

    return this.ranking;
  }
}

module.exports = CompareLotto;
