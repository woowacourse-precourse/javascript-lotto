const LottoGame = require("./LottoGame");

class App {
  play() {
    new LottoGame().play();
  }
}

module.exports = App;
