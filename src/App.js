const Money = require("./Money");

class App {
  play() {
    new Money().startLottoGame();
  }
}

module.exports = App;
