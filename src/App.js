const LottoGameMainSystem = require('../src/components/LottoGameMainSystem');

class App {
  play() {
    const lottoGameMainSystem = new LottoGameMainSystem();
    lottoGameMainSystem.runGame();
  }
}

module.exports = App;
