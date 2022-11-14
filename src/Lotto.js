class Lotto {
  #numbers;
  constructor(totalNumbers, issueList) {
    this.#numbers = totalNumbers;
    this.issueList = issueList;
    this.winningNumber = this.#numbers.slice(0, 6);
    this.bonusNumber = this.#numbers.slice(6);
    this.purchaseAmount = issueList.size * 1000;
    this.winningContentArr = ['3개 일치', '4개 일치', '5개 일치', '5개 일치, 보너스 볼 일치', '6개 일치'];
    this.winningAmountArr = ['5,000', '50,000', '1,500,000', '30,000,000', '2,000,000,000'];
    this.winningCounterArr = new Array(5).fill(0);
    this.statistics();
  }

  statistics() {
    this.issueList.forEach((issueNumber) => {
      const matchCount = issueNumber.filter((number) => this.winningNumber.includes(number)).length;
      if (matchCount === 3) {
        this.winningCounterArr[0] += 1;
      }
      if (matchCount === 4) {
        this.winningCounterArr[1] += 1;
      }
      if (matchCount === 5 && issue.includes(this.bonusNumber) !== false) {
        this.winningCounterArr[2] += 1;
      }
      if (matchCount === 5 && issue.includes(this.bonusNumber)) {
        this.winningCounterArr[3] += 1;
      }
      if (matchCount === 6) {
        this.winningCounterArr[4] += 1;
      }
    });
    this.yieldCalculation();
  }

  yieldCalculation() {
    let profit = 0;
    this.winningAmountArr.forEach((amount, index) => {
      profit += Number(amount.replace(/\,/g, '')) * this.winningCounterArr[index];
    });
    const calculation = profit / this.purchaseAmount * 100;
    this.yield = calculation.toFixed(1);
  }
}

module.exports = Lotto;