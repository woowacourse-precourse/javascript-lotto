const { Console } = require('@woowacourse/mission-utils');
const Draw = require('./Draw');
const Issue = require('./Issue');
const Validation = require('./Validation');

class Lotto {
  #numbers;
  constructor(inputNumbers, issueList) {
    this.validation = new Validation();
    this.draw = new Draw();
    this.winningNumber = this.validation.winningInputValue(inputNumbers);
    const bonusInput = this.draw.bonus();
    this.validation.bonusInputValue(inputNumbers, bonusInput);
    this.bonusNumber = Number(bonusInput);
    const totalNumbers = [...this.winningNumber, this.bonusNumber];
    this.#numbers = totalNumbers;
    this.issueList = issueList;
    this.purchaseAmount = this.issueList.size * 1000;
    this.winningContentArr = ['3개 일치', '4개 일치', '5개 일치', '5개 일치, 보너스 볼 일치', '6개 일치'];
    this.winningAmountArr = ['5,000', '50,000', '1,500,000', '30,000,000', '2,000,000,000'];
    this.winningCounterArr = new Array(5).fill(0);
    this.statistics();
    this.yieldCalculation();
    this.print();
  }

  statistics() {
    this.issueList.forEach((issueNumber) => {
      const matchCount = issueNumber.filter((number) => this.winningNumber.includes(number)).length;
      this.comparison(matchCount);
    });
  }

  comparison(matchCount) {
    if (matchCount === 3) {
      return this.winningCounterArr[0] += 1;
    }
    if (matchCount === 4) {
      return this.winningCounterArr[1] += 1;
    }
    if (matchCount === 5 && issue.includes(this.bonusNumber) !== false) {
      return this.winningCounterArr[2] += 1;
    }
    if (matchCount === 5 && issue.includes(this.bonusNumber)) {
      return this.winningCounterArr[3] += 1;
    }
    if (matchCount === 6) {
      return this.winningCounterArr[4] += 1;
    }
  }

  yieldCalculation() {
    let profit = 0;
    this.winningAmountArr.forEach((amount, index) => {
      profit += Number(amount.replace(/\,/g, '')) * this.winningCounterArr[index];
    });
    const calculation = profit / this.purchaseAmount * 100;
    this.yield = calculation.toFixed(1);
  }

  print() {
    for (let index = 0; index < 6; index++) {
      Console.print(`${this.winningContentArr[index]} (${this.winningAmountArr[index]}원) - ${this.winningCounterArr[index]}개`);
    }
    Console.print(`총 수익률은 ${this.yield}%입니다.`);
  }
}

module.exports = Lotto;