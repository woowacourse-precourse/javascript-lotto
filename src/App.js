const Buy = require("./Buy");
const Match = require("./Match");

class App {
  play() {
    const buy = new Buy();
    const gameCount = buy.countCalculate();
    const gameNumbers = buy.randomNumbers(gameCount);
    const match = new Match();
    match.countMatchingNumbers(gameNumbers);
    console.log(match.bonusFlag);
    console.log(match.matchRecord);

  }
}



module.exports = App;
