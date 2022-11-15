class Calculator {
  constructor(lotteries, winningNumber, bonusNumber, money) {
    this.lotteries = lotteries;
    this.winningNumber = winningNumber;
    this.bonusNumber = Number(bonusNumber);
    this.money = money;
    this.statistic = [0, 0, 0, 0, 0];
    this.calculateStatistics();
  }

  calculateStatistics() {
    this.lotteries.forEach((lotto) => this.compareLotteries(lotto));
  }

  compareLotteries(lotto) {
    const sameNumber = this.winningNumber.filter((number) =>
      lotto.includes(+number)
    );
    const count = sameNumber.length;

    const scoreIndex = this.getScoreIndex(count, lotto);
    if (scoreIndex) {
      this.statistic[scoreIndex] += 1;
    }
  }

  getScoreIndex(count, lotto) {
    if (count >= 3 && count < 5) {
      return count - 3;
    }
    if (count === 6) {
      return 4;
    }
    if (count === 5) {
      this.checkBonusNumber(lotto);
    }
  }

  checkBonusNumber(lotto) {
    if (lotto.includes(this.bonusNumber)) {
      return 3;
    }
    return 2;
  }
}

module.exports = Calculator;
