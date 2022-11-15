const LottoGame = require('./controller/LottoGame');

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  play() {
    this.lottoGame.init();
  }
}

const app = new App();
app.play();

module.exports = App;
