const LottoGame = require("./LottoGame");

class App {
  play() {
    const game = new LottoGame();
    game.start();
  }
}

module.exports = App;
