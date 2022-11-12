const LottoGame = require("./LottoGame");

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
    this.play();
  }

  play() {
    this.#lottoGame.enter();
  }
}

new App();

module.exports = App;
