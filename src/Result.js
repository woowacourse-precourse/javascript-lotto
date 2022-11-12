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
}

module.exports = Result;
