const MissionUtils = require("@woowacourse/mission-utils");

class Statistics {
  constructor(totalLottoNumber, winnerNumber, bonusNumber) {
    this.totalLottoNumber = totalLottoNumber;
    this.winnerNumber = winnerNumber;
    this.bonusNumber = bonusNumber;
  }

  getTotalRankingArr() {
    const totalRankingArr = [0, 0, 0, 0, 0];
    const numberOfMatchingNumbersRankedArr = this.getNumberOfMatchingNumbersRankedArr();
    numberOfMatchingNumbersRankedArr.map((num) => {
      if (num - 2 >= 0) return totalRankingArr[num - 2]++;
    });
    return totalRankingArr;
  }

  getNumberOfMatchingNumbersRankedArr() {
    return this.totalLottoNumber.flatMap((numbers) =>
      this.getNumberOfMatchingNumbersRanked(numbers)
    );
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
      if (this.winnerNumber.includes(number.toString())) return number;
    });
    return numberOfWinnerNumber.filter((number) => number !== undefined).length;
  }

  compareWithBonusNumber(numbers) {
    if (numbers.includes(Number(this.bonusNumber))) return 5;
    return 4;
  }

  printLottoResult(totalRankingArr) {
    const prizeMoneyArr = ["5,000", "50,000", "1,500,000", "30,000,000", "2,000,000,000"];
    const rankingArr = [3, 4, 5, 5, 6];
    return totalRankingArr.map((lotto, index) => {
      if (index === 3) {
        return MissionUtils.Console.print(
          `${rankingArr[index]}개 일치, 보너스 볼 일치 (${prizeMoneyArr[index]}원) - ${lotto}개`
        );
      }
      return MissionUtils.Console.print(
        `${rankingArr[index]}개 일치 (${prizeMoneyArr[index]}원) - ${lotto}개`
      );
    });
  }
}
module.exports = Statistics;
