const NUMBER_OF_MATCHES = 3;

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

  countAndSave(numberComparison) {
    if (numberComparison >= NUMBER_OF_MATCHES) {
      return numberComparison;
    }
    return 0;
  }


}

module.exports = ComparisonOfWinningNumbers;