const LottoGameView = require("./LottoGameView");

class App {
  play() {
    const view = new LottoGameView();
    view.gameStart();
  }
}

module.exports = App;
