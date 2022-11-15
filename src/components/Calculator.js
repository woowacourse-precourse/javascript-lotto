class Calculator {
  constructor(lotteries, winningNumber, bonusNumber, money) {
    this.lotteries = lotteries;
    this.winningNumber = winningNumber;
    this.bonusNumber = Number(bonusNumber);
    this.money = money;
    this.statistic = [0, 0, 0, 0, 0];
    this.prize = [5000, 50000, 1500000, 30000000, 2000000000];
    this.yield = 0;
    this.calculateStatistics();
  }

  calculateStatistics() {
    this.lotteries.forEach((lotto) => this.compareLotteries(lotto));
    this.yield = this.calculateYield(this.statistic) && "0.0";
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

  calculateYield(statistic) {
    const prizeMoney = this.getPrizeMoney(statistic);
    return ((prizeMoney / this.money) * 100).toFixed(1).toLocaleString();
  }

  getPrizeMoney(statistic) {
    const prizeMoneyArray = this.getPrizeMoneyArray(statistic);
    const prizeMoney = prizeMoneyArray.reduce(
      (sum, currentValue) => sum + currentValue,
      0
    );
    return prizeMoney;
  }

  getPrizeMoneyArray(statistic) {
    return statistic.map((count, index) => count * this.prize[index]);
  }
}

module.exports = Calculator;
