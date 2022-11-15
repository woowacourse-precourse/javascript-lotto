const LottoGame = require("./LottoGame");

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  play() {
    this.#lottoGame.start();
  }
}

module.exports = App;

const app = new App();
app.play();
