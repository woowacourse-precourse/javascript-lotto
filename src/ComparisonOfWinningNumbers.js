class ComparisonOfWinningNumbers {

  constructor(lottoNumber, winningNumber) {
    this.lottoNumber = lottoNumber;
    this.winningNumber = winningNumber;
  }

  Comparison() {
    let numberComparison = this.lottoNumber.filter(number => this.winningNumber.includes(number));
    return numberComparison;
  }

  checkTheNumber(numberComparison) {
    return numberComparison.length;
  }



}

module.exports = ComparisonOfWinningNumbers;