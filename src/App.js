const LottoGame = require("./LottoGame");

class App {
  game = LottoGame();

  play() {
    this.game.start();
  }
}

module.exports = App;
