const { RANK, PRIZE_MONEY, UNIT } = require("./utils/constant");

class Profit {
  constructor(purchase, result) {
    this.purchase = purchase;
    this.result = result;
    this.receiveAmount = UNIT.DEFAULT;
    this.profit = UNIT.DEFAULT;
  }

  receiveMoney() {
    const rankNumber = Object.keys(RANK).slice(0, 5);
    rankNumber.forEach((nowCheckRank) => {
      this.receiveAmount +=
        this.result[nowCheckRank] * PRIZE_MONEY[nowCheckRank];
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
