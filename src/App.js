const LottoGame = require("./LottoGame");

class App {
  game = new LottoGame();

  constructor() {}

  play() {
    this.game.start();
  }
}

module.exports = App;
