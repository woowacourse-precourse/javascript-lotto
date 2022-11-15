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
      THREE: 0,
      FOUR: 0,
      FIVE: 0,
      FIVEWITHBONUS: 0,
      SIX: 0,
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
    if (countList.winningNumbers === 6) {
      this.winningStatistics.SIX += 1;
    }
    if (countList.winningNumbers === 5 && countList.bonusNumber === 1) {
      this.winningStatistics.FIVEWITHBONUS += 1;
    } else if (countList.winningNumbers === 5) {
      this.winningStatistics.FIVE += 1;
    }
    if (countList.winningNumbers === 4) {
      this.winningStatistics.FOUR += 1;
    }
    if (countList.winningNumbers === 3) {
      this.winningStatistics.THREE += 1;
    }
  }

  result() {
    this.printResult();
  }

  printResult() {
    const { THREE, FOUR, FIVE, FIVEWITHBONUS, SIX } = this.winningStatistics;

    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${THREE}개`);
    Console.print(`4개 일치 (50,000원) - ${FOUR}개`);
    Console.print(`5개 일치 (1,500,000원) - ${FIVE}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${FIVEWITHBONUS}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${SIX}개`);
  }
}

module.exports = Result;
