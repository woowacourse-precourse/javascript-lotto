const Buy = require("./Buy");

class App {
  play() {
    const buy = new Buy();
    const gameCount = buy.countCalculate();
    const gameNumbers = buy.randomNumbers(gameCount);
  }
}



module.exports = App;
