const UI = require("./UI");

class Result {
  ranking = [0, 0, 0, 0, 0];
  profit = 0;

  // 번호가 5개 일치하는 경우를 대비하여 bonus까지 고려해서 등수를 책정해야한다.
  rankingCalculate(record, bonus) {
    if (bonus) {
      record[2] -= bonus;
      this.ranking[3] = bonus;
    }
    for (let i = 0; i < 3; i++) {
      this.ranking[i] = record[i];
    }
    this.ranking[4] = record[3];
    UI.printWinning(this.ranking);
  }

  profitCalculate(count) {
    const spending = count * 1000;
    const earning =
      this.ranking[0] * 5000 +
      this.ranking[1] * 50000 +
      this.ranking[2] * 1500000 +
      this.ranking[3] * 30000000 +
      this.ranking[4] * 2000000000;
    this.profit = Math.round((earning / spending) * 100 * 10) / 10;
    UI.printProfit(this.profit);
  }
}

module.exports = Result;
