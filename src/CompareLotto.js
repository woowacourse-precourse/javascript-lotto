const { RANK } = require("./utils/constant");

class CompareLotto {
  constructor(userLotto, winNumber, bonusNumber) {
    this.userLotto = userLotto;
    this.winNumber = winNumber;
    this.bonusNumber = bonusNumber;
    this.ranking = {};
  }

  saveResult(correctCnt, correctBonus) {
    const COMPARE_NUMBER = 8;
    const calculatedValue = COMPARE_NUMBER - correctCnt;
    switch (calculatedValue) {
      case 2:
        this.ranking[1] += 1;
        break;
      case 3:
        if (correctBonus) {
          this.ranking[2] += 1;
          break;
        }
        this.ranking[3] += 1;
        break;
      case 4:
        this.ranking[4] += 1;
        break;
      case 5:
        this.ranking[5] += 1;
        break;
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
    Object.keys(RANK).forEach((number) => {
      this.ranking[number] = 0;
    });
    this.userLotto.forEach((lotto) => {
      const [correctCnt, correctBonus] = this.cntCorrect(lotto);
      if (correctCnt > 2) this.saveResult(correctCnt, correctBonus);
    });
    return this.ranking;
  }
}

module.exports = CompareLotto;
