const { IncomeMap, ScoreMap, DataForm } = require("./Utils");

class Stats {
  constructor({ winningNumbers, bonusNumber, purchased, cash }) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.purchased = purchased;
    this.expense = this.getExpense(cash);
    this.data = this.gather();
    this.performance = this.getPerformance();
  }

  getScore(lotto) {
    const lottoNumbers = lotto.showNumbers();
    const correctCount = this.winningNumbers.filter((number) => lottoNumbers.includes(number)).length;
    const bonus = lottoNumbers.includes(this.bonusNumber);

    const score = ScoreMap[correctCount](bonus);
    return score;
  }

  gather() {
    const data = Object.assign({}, DataForm);

    this.purchased.lottoArray.forEach((lotto) => {
      const score = this.getScore(lotto);
      data[score]++;
    });

    return data;
  }

  getExpense(cash) {
    return Math.floor(cash);
  }

  getPerformance() {
    const income = Object.keys(IncomeMap).reduce((acc, currentKey) => acc + this.data[currentKey] * IncomeMap[currentKey], 0);

    const performance = income / this.expense;
    const percentage = this.formatPercentage(performance);
    return percentage;
  }

  formatPercentage(performance) {
    const percentage = performance * 100;
    const fixedPointTwo = percentage.toFixed(2);
    const removedZeroEndings = parseFloat(fixedPointTwo);
    return removedZeroEndings;
  }
}

module.exports = Stats;
