const LottoGame = require('./LottoGame');

class App {
  play() {
    const lottoGame = new LottoGame();
    lottoGame.inputPurchaseAmount();
  }
}

module.exports = App;
