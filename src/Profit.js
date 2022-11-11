const { RANK, PRIZE_MONEY } = require("./utils/constant");

class Profit {
  constructor(purchase, result) {
    this.purchase = purchase;
    this.result = result;
    this.receiveAmount = 0;
    this.nowCheckRank = 0;
    this.profit = 0;
  }

  receiveMoney() {
    Object.keys(RANK).forEach((target) => {
      this.nowCheckRank = RANK[target];
      this.receiveAmount +=
        this.result[target] * PRIZE_MONEY[this.nowCheckRank];
    });
  }

  calculateProfit() {
    this.profit = (
      (this.receiveAmount / this.purchase).toFixed(3) * 100
    ).toFixed(1);
  }

  calculate() {
    this.receiveMoney();
    this.calculateProfit();

    return this.profit;
  }
}

module.exports = Profit;
