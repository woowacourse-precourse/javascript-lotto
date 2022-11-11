class Statistics {
  constructor(totalLottoNumber, winnerNumber, bonusNumber) {
    this.totalLottoNumber = totalLottoNumber;
    this.winnerNumber = winnerNumber;
    this.bonusNumber = bonusNumber;
  }

  getNumberOfMatchingWinnerNumbers(numbers) {
    const numberOfWinnerNumber = numbers.map((number) => {
      if (number.toString() === this.winnerNumber[index]) {
        return number;
      }
    });
    return numberOfWinnerNumber.filter((number) => number !== undefined).length;
  }
}
module.exports = Statistics;
