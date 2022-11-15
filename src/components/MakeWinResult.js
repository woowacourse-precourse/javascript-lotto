const Statistic = require("./Statistic");
const ValidateBonus = require("../validation/ValidateBonus");
const { MIN_MATCH, MAX_MATCH } = require("../constants");

class MakeWinResult {
  #numbers;
  #bonusNumber;
  #winResult;
  #lotteries;

  constructor(numbers, bonusNumber, lotteries) {
    ValidateBonus(numbers, bonusNumber);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
    this.#winResult = this.setWinResult();
    this.#lotteries = lotteries;
  }

  setWinResult() {
    let winResult = new Map();
    for (let matchCnt = MIN_MATCH; matchCnt <= MAX_MATCH; matchCnt++) {
      winResult.set(matchCnt, 0);
    }
    return winResult;
  }

  iterateLotteries() {
    this.#lotteries.forEach((lottery) => {
      this.checkLottery(lottery);
    });
    this.submitResult();
  }

  submitResult() {
    const statistic = new Statistic(this.#winResult, this.#lotteries.length);
    statistic.printStatistic();
  }

  checkLottery(lottery) {
    let matchCount = 0;
    this.#numbers.forEach((number) => {
      if (lottery.includes(number)) {
        matchCount += 1;
      }
    });
    this.calcMatchCount(matchCount, lottery);
  }

  calcMatchCount(matchCount, lottery) {
    if (matchCount == 6) matchCount = this.winFirstPlace(matchCount);
    if (matchCount == 5) matchCount = this.winSecondPlace(matchCount, lottery);
    if (matchCount > 2) this.makeWinResult(matchCount);
  }

  winFirstPlace(matchCount) {
    return (matchCount += 1);
  }

  winSecondPlace(matchCount, lottery) {
    return (matchCount = this.checkBonus(lottery)
      ? (matchCount += 1)
      : matchCount);
  }

  checkBonus(lottery) {
    return lottery.includes(+this.#bonusNumber);
  }

  makeWinResult(result) {
    this.#winResult.set(result, this.#winResult.get(result) + 1);
  }
}

module.exports = MakeWinResult;
