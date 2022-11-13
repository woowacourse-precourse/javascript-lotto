class LottoSimulator {
  checkWinningResult(lottos, winningNumber, bonusNumber) {
    lottos.forEach(lotto => {
      this.setGrade(lotto.getRank(winningNumber, bonusNumber));
    });
  }

  setGrade(grade) {
    if (grade === 'none') return;
    this.gradeCount.set(grade, this.gradeCount.get(grade) + 1);
  }
}

module.exports = LottoSimulator;
