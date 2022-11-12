const LottoGameView = require("./LottoGameView");

class App {
  play() {
    const game = new LottoGameView();
    game.gameStart();
  }
}

module.exports = App;
