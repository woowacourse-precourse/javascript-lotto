const { GRADE } = require("./constant/constant");
const { round } = require("./utils/utils");

class LottoSimulator {
  gradeCount;

  constructor() {
    this.gradeCount = new Map([
      [GRADE.FIFTH.NAME, 0],
      [GRADE.FOURTH.NAME, 0],
      [GRADE.THIRD.NAME, 0],
      [GRADE.SECOND.NAME, 0],
      [GRADE.FIRST.NAME, 0],
    ]);
  }
  
  checkWinningResult(lottos, winningLotto, bonusNumber) {
    lottos.forEach(lotto => {
      this.setGrade(lotto.getRank(winningLotto.getNumbers(), bonusNumber));
    });
  }

  setGrade(grade) {
    if (grade === undefined) return;
    this.gradeCount.set(grade, this.gradeCount.get(grade) + 1);
  }

  calcReturnRate(money) {
    let profit = 0;
    this.gradeCount.forEach((count, grade) => {
      profit += count * GRADE[grade.toUpperCase()].PRIZE_MONEY;
    });
    const returnRate = profit / money * 100;
    return round(returnRate);
  }
}

module.exports = LottoSimulator;
