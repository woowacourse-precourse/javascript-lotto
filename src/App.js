const LottoManager = require('./LottoManager');
class App {
  constructor() {}
  play() {
    const lottoManager = new LottoManager();
    lottoManager.init();
  }
}

module.exports = App;
