const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("./constants");

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
    Console.print(OUTPUT_MESSAGE.fifthPrize(this.lottoResult[0]));
    Console.print(OUTPUT_MESSAGE.fourthPrize(this.lottoResult[1]));
    Console.print(OUTPUT_MESSAGE.thirdPrize(this.lottoResult[2]));
    Console.print(OUTPUT_MESSAGE.secondPrize(this.lottoResult[3]));
    Console.print(OUTPUT_MESSAGE.firstPrize(this.lottoResult[4]));
  }
}

module.exports = MatchingNumber;
