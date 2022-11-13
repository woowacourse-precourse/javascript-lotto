class LottoSimulator {
  checkWinningResult(lottos, winningNumber, bonusNumber) {
    lottos.forEach(lotto => {
      this.setGrade(lotto.getRank(winningNumber, bonusNumber));
    });
  }
}

module.exports = LottoSimulator;
