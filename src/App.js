const LottoGame = require("./LottoGame");

class App {
  #lottoGame = new LottoGame();
  play() {
    this.#lottoGame.start();
  }
}

module.exports = App;
