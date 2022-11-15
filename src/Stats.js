const underThree = (_) => "underThree";
const three = (_) => "three";
const four = (_) => "four";
const five = (bonus) => (bonus ? "fivePlusBonus" : "five");
const six = (_) => "six";

const scoreMap = {
  0: underThree,
  1: underThree,
  2: underThree,
  3: three,
  4: four,
  5: five,
  6: six,
};

const dataForm = {
  underThree: 0,
  three: 0,
  four: 0,
  five: 0,
  fivePlusBonus: 0,
  six: 0,
};

const incomeMap = {
  three: Price.FIVE_THOUSAND,
  four: Price.FIFTY_THOUSAND,
  five: Price.FIVE_HUNDRED_THOUSAND,
  fivePlusBonus: Price.THIRTY_MILLION,
  six: Price.TWO_BILLION,
};

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

    const score = scoreMap[correctCount](bonus);
    return score;
  }

  gather() {
    const data = Object.assign({}, dataForm);

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
    const income = Object.keys(incomeMap).reduce((acc, currentKey) => acc + this.data[currentKey] * incomeMap[currentKey], 0);

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
