class ComparisonOfWinningNumbers {

  constructor(lottoNumber, winningNumber) {
    this.lottoNumber = lottoNumber;
    this.winningNumber = winningNumber;
  }

  Comparison() {
    let winner = this.lottoNumber.filter(number => this.winningNumber.includes(number));
    return winner;
  }

  WinningCriteriaAndAmount(winner) {
    return winner.length;
  }
}

module.exports = ComparisonOfWinningNumbers;