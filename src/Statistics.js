class Statistics {
  constructor(totalLottoNumber, winnerNumber, bonusNumber) {
    this.totalLottoNumber = totalLottoNumber;
    this.winnerNumber = winnerNumber;
    this.bonusNumber = bonusNumber;
  }

  getNumberOfMatchingNumbersRanked(numbers) {
    const numberOfMatchingWinnerNumbers = this.getNumberOfMatchingWinnerNumbers(numbers);
    if (numberOfMatchingWinnerNumbers === 5) return this.compareWithBonusNumber(numbers);
    if (numberOfMatchingWinnerNumbers > 1 && numberOfMatchingWinnerNumbers <= 4) {
      return numberOfMatchingWinnerNumbers - 1;
    }
    return numberOfMatchingWinnerNumbers;
  }

  getNumberOfMatchingWinnerNumbers(numbers) {
    const numberOfWinnerNumber = numbers.map((number) => {
      if (number.toString() === this.winnerNumber[index]) {
        return number;
      }
    });
    return numberOfWinnerNumber.filter((number) => number !== undefined).length;
  }

  compareWithBonusNumber(numbers) {
    if (numbers.includes(Number(this.bonusNumber))) {
      return 5;
    }
    return 4;
  }
}
module.exports = Statistics;
