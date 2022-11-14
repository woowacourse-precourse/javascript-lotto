class Statistics {
  constructor(totalLottoNumber, winnerNumber, bonusNumber) {
    this.totalLottoNumber = totalLottoNumber;
    this.winnerNumber = winnerNumber;
    this.bonusNumber = bonusNumber;
    this.lottoResult = [0, 0, 0, 0, 0];
  }

  getResultOfThreeToFiveMatchingNumbers() {
    this.totalLottoNumber.forEach((numbers) => this.countNumberOfMatchingNumbers(numbers));
    return this.lottoResult;
  }

  countNumberOfMatchingNumbers(numbers) {
    const numberOfMatchingNumbers = this.getMatchingNumber(numbers).length;
    if (numberOfMatchingNumbers === 6) {
      return (this.lottoResult[numberOfMatchingNumbers - 2] += 1);
    }

    if (numberOfMatchingNumbers === 5 && this.isContainBonusNumber(numbers)) {
      return (this.lottoResult[numberOfMatchingNumbers - 2] += 1);
    }

    if (numberOfMatchingNumbers >= 3) {
      return (this.lottoResult[numberOfMatchingNumbers - 3] += 1);
    }

    return;
  }

  getMatchingNumber(numbers) {
    const numberOfWinnerNumber = numbers.map((number) => {
      if (this.winnerNumber.includes(number.toString())) return number;
    });
    return numberOfWinnerNumber.filter((number) => number !== undefined);
  }

  isContainBonusNumber(numbers) {
    if (numbers.includes(Number(this.bonusNumber))) return true;
    return false;
  }
}

module.exports = Statistics;
