const Buy = require("./Buy");
const Match = require("./Match");

class App {
  play() {
    const buy = new Buy();
    const gameCount = buy.countCalculate();
    const gameNumbers = buy.randomNumbers(gameCount);
    const match = new Match();
    const record = match.countMatchingNumbers(gameNumbers);
  }
}



module.exports = App;
