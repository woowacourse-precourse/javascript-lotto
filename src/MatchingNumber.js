const { Console } = require("@woowacourse/mission-utils");

class MatchingNumber {
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

  printLottoResult() {
    Console.print(`3개 일치 (5,000원) - ${this.lottoResult[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.lottoResult[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.lottoResult[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.lottoResult[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.lottoResult[4]}개`);
  }
}

module.exports = MatchingNumber;
