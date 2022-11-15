const { Console } = require("@woowacourse/mission-utils");
const {
  MATCH_MSG,
  PAYOUT,
  MIN_MATCH,
  MAX_MATCH,
  DIVISION_UNIT,
} = require("../constants");

class Statistic {
  #result;
  #winnerRank = [];
  #profit;
  #quantity;

  constructor(result, quantity) {
    this.#result = result;
    this.#quantity = quantity;
  }

  sortWinner() {
    for (let matchCnt = MIN_MATCH; matchCnt <= MAX_MATCH; matchCnt++) {
      this.#result.get(matchCnt)
        ? this.#winnerRank.push(this.#result.get(matchCnt))
        : this.#winnerRank.push(0);
    }
  }

  calcProfit() {
    let sumOfPayout = 0;
    this.#winnerRank.forEach((winner, idx) => {
      sumOfPayout += +winner * PAYOUT[idx];
    });

    this.#profit = (
      (sumOfPayout / (this.#quantity * DIVISION_UNIT)) *
      100
    ).toFixed(1);
  }

  printStatistic() {
    this.sortWinner();
    MATCH_MSG.forEach((msg, idx) => {
      Console.print(msg + `${this.#winnerRank[idx]}개`);
    });
    this.calcProfit();
    Console.print(`총 수익률은 ${this.#profit}%입니다.`);
    Console.close();
  }
}

module.exports = Statistic;
