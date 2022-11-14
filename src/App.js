const LottoSimulator = require('./LottoSimulator.js');

class App {
  lottoSimulator = new LottoSimulator();

  play() {
    this.lottoSimulator.start();
  }
}

module.exports = App;
