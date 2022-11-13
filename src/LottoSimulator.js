class LottoSimulator {
  gradeCount;

  constructor() {
    this.gradeCount = new Map([
      ['fifth', 0],
      ['fourth', 0],
      ['third', 0],
      ['second', 0],
      ['first', 0],
    ]);
  }
  
  checkWinningResult(lottos, winningNumber, bonusNumber) {
    lottos.forEach(lotto => {
      this.setGrade(lotto.getRank(winningNumber, bonusNumber));
    });
  }

  setGrade(grade) {
    if (grade === 'none') return;
    this.gradeCount.set(grade, this.gradeCount.get(grade) + 1);
  }

  calcReturnRate(money) {
    const profit = this.gradeCount.get('first') * 2000000000 + this.gradeCount.get('second') * 30000000 + this.gradeCount.get('third') * 1500000 + this.gradeCount.get('fourth') * 50000 + this.gradeCount.get('fifth') * 5000;
    const returnRate = profit / money * 100;
    return this.roundToOne(returnRate).toFixed(1);
  }

  roundToOne(num) {
    return +(Math.round(num + "e+1") + "e-1");
  }
}

module.exports = LottoSimulator;
