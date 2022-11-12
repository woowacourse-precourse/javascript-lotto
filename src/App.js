const LottoGame = require('./LottoGame');

class App {
  play() {
    const lottoGame = new LottoGame();
    lottoGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;
