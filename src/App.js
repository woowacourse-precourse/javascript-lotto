const LottoGame = require("./LottoGame");

class App {
  play() {
    const lottoGame = new LottoGame();
    lottoGame.game();
  }
}

const app = new App();
app.play();

module.exports = App;
