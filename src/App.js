const LottoManager = require("./LottoManager");

class App {
  play() {
    const lottoManager = new LottoManager();
    lottoManager.start();
  }
}

module.exports = App;
