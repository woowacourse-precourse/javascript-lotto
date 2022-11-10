const LottoGame = require("./LottoGame");

class App {
  game = new LottoGame();

  play() {
    this.game.start();
  }
}

module.exports = App;
