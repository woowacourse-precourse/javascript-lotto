const LottoGame = require('./LottoGame');

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  play() {
    this.lottoGame.start();
  }
}

module.exports = App;
