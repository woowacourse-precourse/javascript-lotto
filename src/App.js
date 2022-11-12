const Buy = require("./Buy");
const Match = require("./Match");
const Result = require("./Result");

class App {
  play() {
    const buy = new Buy();
    const gameCount = buy.countCalculate();
    const gameNumbers = buy.randomNumbers(gameCount);
    const match = new Match();
    match.countMatchingNumbers(gameNumbers);
    const result = new Result();
    result.rankingCalculate(match.matchRecord, match.bonusFlag);
  }
}



module.exports = App;
