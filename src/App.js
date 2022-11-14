const LottoGame = require("./LottoGame.js");

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  play() {
    this.lottoGame.play();
  }
}

const app = new App();
app.play();

module.exports = App;
