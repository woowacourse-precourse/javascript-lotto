const LottoGame = require("./LottoGame.js");
class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }
  play() {
    this.lottoGame.start();
  }
}

module.exports = App;
