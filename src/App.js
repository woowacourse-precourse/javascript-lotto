const Calculation = require("./Calculation");

class App {
  play() {
    const cal = new Calculation();
    const gameCount = cal.countCalculate();
    const gameNumbers = cal.randomNumbers(gameCount);
  }
}



module.exports = App;
