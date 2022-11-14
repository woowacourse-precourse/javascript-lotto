const LottoGame = require('./LottoGame');

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  play() {
    this.lottoGame.start();
  }
}

const a = new App();
a.play();
module.exports = App;
