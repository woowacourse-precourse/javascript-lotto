const LottoGameView = require("./LottoGameView");

class App {
  constructor() {
    this.lottoGameView = new LottoGameView();
  }

  play() {
    this.lottoGameView.getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
