const LottoGame = require("./service/LottoGame.js");

class App {
  constructor() {
    this.LottoGame = new LottoGame();
  }

  play() {
    this.LottoGame.play();
  }
}

const app = new App();
app.play();

module.exports = App;
