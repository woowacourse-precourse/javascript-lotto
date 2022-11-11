class CompareLotto {
  constructor(userLotto, winNumber, bonusNumber) {
    this.userLotto = userLotto;
    this.winNumber = winNumber;
    this.bonusNumber = bonusNumber;
    this.rank = {};
  }

  saveResult(correctCnt, correctBonus) {
    const COMPARE_NUMBER = 8;
    const calculatedValue = COMPARE_NUMBER - correctCnt;
    switch (calculatedValue) {
      case 2:
        this.rank[1] += 1;
        break;
      case 3:
        if (correctBonus) {
          this.rank[2] += 1;
          break;
        }
        this.rank[3] += 1;
        break;
      case 4:
        this.rank[4] += 1;
        break;
      case 5:
        this.rank[5] += 1;
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
    console.log(this.userLotto);
    for (let i = 1; i < 6; i++) this.rank[i] = 0;
    this.userLotto.forEach((lotto) => {
      const [correctCnt, correctBonus] = this.cntCorrect(lotto);
      if (correctCnt > 2) this.saveResult(correctCnt, correctBonus);
    });
    return this.rank;
  }
}

module.exports = CompareLotto;
