const { Console } = require("@woowacourse/mission-utils");
const ValidateBonus = require("./ValidateBonus");
const Statistic = require("./Statistic");
const ValidateLotto = require("./ValidateLotto");
const { MIN_MATCH, MAX_MATCH } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers, lotteries) {
    this.validate(numbers);
    this.#numbers = numbers;
    let winResult = this.setWinResult();
    this.inputBonusNumber(winResult, lotteries);
  }

  validate(numbers) {
    ValidateLotto(numbers);
  }

  setWinResult() {
    let winResult = new Map();
    for (let matchCnt = MIN_MATCH; matchCnt <= MAX_MATCH; matchCnt++) {
      winResult.set(matchCnt, 0);
    }
    return winResult;
  }

  inputBonusNumber(winResult, lotteries) {
    let bonusNumber;
    Console.readLine("보너스 번호를 입력해 주세요,\n", (number) => {
      bonusNumber = number;

      ValidateBonus(this.#numbers, bonusNumber);
      this.iterateLotteries(lotteries, winResult, bonusNumber);

      const statistic = new Statistic(winResult, lotteries.length);
      statistic.printStatistic();
    });
  }

  iterateLotteries(lotteries, winResult, bonusNumber) {
    lotteries.forEach((lottery) => {
      this.checkLottery(lottery, winResult, bonusNumber);
    });
  }

  checkLottery(lottery, winResult, bonusNumber) {
    let matchCount = 0;
    this.#numbers.forEach((number) => {
      if (lottery.includes(number)) {
        matchCount += 1;
      }
    });
    if (matchCount == 6) matchCount += 1;
    if (matchCount == 5)
      this.checkBonus(lottery, bonusNumber) ? (matchCount += 1) : "";
    if (matchCount > 2) this.makeWinResult(matchCount, winResult);
  }

  checkBonus(lottery, bonusNumber) {
    return lottery.includes(+bonusNumber);
  }

  makeWinResult(result, winResult) {
    winResult.set(result, winResult.get(result) + 1);
  }
}

module.exports = Lotto;
