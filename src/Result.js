const { Console } = require("@woowacourse/mission-utils");

class Result {
  #lottoList;
  #winningNumbers;
  #bonusNumber;
  constructor(lottoList, winningNumbers, bonusNumber) {
    this.#lottoList = lottoList;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.winningStatistics = {
      three: 0,
      four: 0,
      five: 0,
      fiveWithBonus: 0,
      six: 0,
    };
    this.profit = 0;
    this.compare();
    this.result();
  }

  compare() {
    this.#lottoList.forEach((line) => {
      const countList = { winningNumbers: 0, bonusNumber: 0 };
      line.forEach((number) => {
        this.count(number, countList);
      });
      this.getWinningStatus(countList);
    });
  }

  count(number, countList) {
    this.countWinningNumbers(number, countList);
    this.countBonusNumber(number, countList);
  }

  countWinningNumbers(number, countList) {
    if (this.#winningNumbers.includes(String(number))) {
      countList.winningNumbers += 1;
    }
  }

  countBonusNumber(number, countList) {
    if (number === parseInt(this.#bonusNumber)) {
      countList.bonusNumber = 1;
    }
  }

  getWinningStatus(countList) {
    const FIRST_PRIZE_MONEY = 2000000000;
    const SECOND_PRIZE_MONEY = 30000000;
    const THIRD_PRIZE_MONEY = 1500000;
    const FOURTH_PRIZE_MONEY = 50000;
    const FIFTH_PRIZE_MONEY = 5000;

    if (countList.winningNumbers === 6) {
      this.winningStatistics.six += 1;
      this.profit += FIRST_PRIZE_MONEY;
    }

    if (countList.winningNumbers === 5 && countList.bonusNumber === 1) {
      this.winningStatistics.fiveWithBonus += 1;
      this.profit += SECOND_PRIZE_MONEY;
    } else if (countList.winningNumbers === 5) {
      this.winningStatistics.five += 1;
      this.profit += THIRD_PRIZE_MONEY;
    }

    if (countList.winningNumbers === 4) {
      this.winningStatistics.four += 1;
      this.profit += FOURTH_PRIZE_MONEY;
    }

    if (countList.winningNumbers === 3) {
      this.winningStatistics.three += 1;
      this.profit += FIFTH_PRIZE_MONEY;
    }
  }

  result() {
    this.printResult();
  }

  printResult() {
    const { three, four, five, fiveWithBonus, six } = this.winningStatistics;

    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${three}개`);
    Console.print(`4개 일치 (50,000원) - ${four}개`);
    Console.print(`5개 일치 (1,500,000원) - ${five}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveWithBonus}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${six}개`);
  }
}

module.exports = Result;
