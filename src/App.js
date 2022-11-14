const LottoGame = require("./LottoGame");

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
    this.play();
  }

  play() {
    this.#lottoGame.playLottoGame();
  }
}

new App();

module.exports = App;
