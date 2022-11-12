const Money = require("./Money");
const UI = require("./UI");

class Result {
  ranking = [0, 0, 0, 0, 0];
  yield = 0;

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

  yieldCalculate(count) {
    const spending = count * 1000;
    const earning =
      this.ranking[0] * 5000 +
      this.ranking[1] * 50000 +
      this.ranking[2] * 1500000 +
      this.ranking[3] * 30000000 +
      this.ranking[4] * 2000000000;
    this.yield = Math.round((earning / spending) * 100 * 10) / 10;
    console.log(this.yield);
  }
}

module.exports = Result;
