const LottoGame = require('./LottoGame');

class App {
  lottoGame = new LottoGame();

  play() {
    this.lottoGame.run();
  }
}

module.exports = App;

const app = new App();
app.play();
