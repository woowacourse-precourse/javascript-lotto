const { Console } = require("@woowacourse/mission-utils");

class MatchingNumber {
  constructor(totalLottoNumber, winnerNumber, bonusNumber) {
    this.totalLottoNumber = totalLottoNumber;
    this.winnerNumber = winnerNumber;
    this.bonusNumber = bonusNumber;
  }

  getNumberOfMatchingNumbersFromThreeToSix() {
    const numberOfMatchingNumbersFromThreeToSix = [0, 0, 0, 0, 0];
    const numberOfMatchingNumbers = this.getNumberOfMatchingNumbers();
    numberOfMatchingNumbers.map((num) => {
      if (num - 2 >= 0) return (numberOfMatchingNumbersFromThreeToSix[num - 2] += 1);
    });
    return numberOfMatchingNumbersFromThreeToSix;
  }

  getNumberOfMatchingNumbers() {
    return this.totalLottoNumber.flatMap((numbers) => this.getNumberOfMatchingNumber(numbers));
  }

  getNumberOfMatchingNumber(numbers) {
    const numberOfMatchingNumbers = this.getMatchingNumber(numbers).length;
    if (numberOfMatchingNumbers === 5) {
      return this.getNumberOfNumbersCompareWtihBonusNumber(numbers);
    }
    if (numberOfMatchingNumbers > 1 && numberOfMatchingNumbers <= 4) {
      return numberOfMatchingNumbers - 1;
    }
    return numberOfMatchingNumbers;
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
