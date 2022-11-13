const { Console } = require("@woowacourse/mission-utils");

class MatchingNumber {
  constructor(totalLottoNumber, winnerNumber, bonusNumber) {
    this.totalLottoNumber = totalLottoNumber;
    this.winnerNumber = winnerNumber;
    this.bonusNumber = bonusNumber;
    this.lottoResult = [0, 0, 0, 0, 0];
  }

  getResultOfThreeToFiveMatchingNumbers() {
    this.totalLottoNumber.flatMap((numbers) => this.countNumberOfMatchingNumbers(numbers));
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

  getNumberOfNumbersCompareWtihBonusNumber(numbers) {
    if (numbers.includes(Number(this.bonusNumber))) return 5;
    return 4;
  }

  printLottoResult(totalRanking) {
    const prizeMoney = ["5,000", "50,000", "1,500,000", "30,000,000", "2,000,000,000"];
    const ranking = [3, 4, 5, 5, 6];
    return totalRanking.map((lotto, index) => {
      if (index === 3) return this.printSecondPlaceLotto(ranking, index, prizeMoney, lotto);
      return this.printLottoExceptSecondPlace(ranking, index, prizeMoney, lotto);
    });
  }

  printSecondPlaceLotto(ranking, index, prizeMoney, lotto) {
    return Console.print(
      `${ranking[index]}개 일치, 보너스 볼 일치 (${prizeMoney[index]}원) - ${lotto}개`
    );
  }

  printLottoExceptSecondPlace(ranking, index, prizeMoney, lotto) {
    return Console.print(`${ranking[index]}개 일치 (${prizeMoney[index]}원) - ${lotto}개`);
  }
}
module.exports = MatchingNumber;
