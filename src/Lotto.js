const { Console } = require('@woowacourse/mission-utils');
const { WINNING_ARRAY, NUMBER } = require('./constants/Setting');
const Draw = require('./Draw');
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
    this.#numbers = [...this.winningNumber, this.bonusNumber];
    this.issueList = issueList;
    this.winningContentArr = WINNING_ARRAY.COUNTER;
    this.winningAmountArr = WINNING_ARRAY.AMOUNT;
    this.winningCounterArr = WINNING_ARRAY.EMPTY;
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
    if (matchCount === NUMBER.MATCH_COUNTER_THREE) {
      return this.winningCounterArr[NUMBER.PLACE_5TH] += 1;
    }
    if (matchCount === NUMBER.MATCH_COUNTER_FOUR) {
      return this.winningCounterArr[NUMBER.PLACE_4TH] += 1;
    }
    if (matchCount === NUMBER.MATCH_COUNTER_FIVE && issue.includes(this.bonusNumber) !== false) {
      return this.winningCounterArr[NUMBER.PLACE_3RD] += 1;
    }
    if (matchCount === NUMBER.MATCH_COUNTER_FIVE && issue.includes(this.bonusNumber)) {
      return this.winningCounterArr[NUMBER.PLACE_2ND] += 1;
    }
    if (matchCount === NUMBER.MATCH_COUNTER_SIX) {
      return this.winningCounterArr[NUMBER.PLACE_1ST] += 1;
    }
  }

  yieldCalculation() {
    let profit = 0;
    const purchaseAmount = this.issueList.size * NUMBER.PURCHASE_UNIT;
    this.winningAmountArr.forEach((amount, index) => {
      profit += Number(amount.replace(/\,/g, '')) * this.winningCounterArr[index];
    });
    const calculation = profit / purchaseAmount * 100;
    this.yield = calculation.toFixed(NUMBER.POINT_PLACE);
  }

  print() {
    for (let index = 0; index <= NUMBER.TOTAL_RANKING; index++) {
      Console.print(`${this.winningContentArr[index]} (${this.winningAmountArr[index]}원) - ${this.winningCounterArr[index]}개`);
    }
    Console.print(`총 수익률은 ${this.yield}%입니다.`);
  }
}

module.exports = Lotto;