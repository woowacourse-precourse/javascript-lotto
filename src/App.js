const LottoGame = require('./LottoGame');

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }
  play() {
    this.lottoGame.start();
  }
}
const app = new App();
app.play();

module.exports = App;
