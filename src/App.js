const Buy = require("./Buy");
const Match = require("./Match");
const Result = require("./Result");

class App {
  play() {
    const buy = new Buy();
    buy.countCalculate();
    buy.randomNumbers();
    const match = new Match();
    match.countMatchingNumbers(buy.gameNumbers);
    const result = new Result();
    result.rankingCalculate(match.matchRecord, match.bonusFlag);
    result.profitCalculate(buy.gameCount);
  }
}

module.exports = App;
