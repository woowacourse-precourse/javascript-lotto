const { Console } = require("@woowacourse/mission-utils");
const Statistic = require("./Statistic");
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
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    let idx = 0;
    while (idx < 6) {
      if (numbers.indexOf(numbers[idx]) != numbers.lastIndexOf(numbers[idx])) {
        throw new Error("[ERROR] 로또 번호는 중복되어서는 안 됩니다.");
      }
      idx += 1;
    }
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
