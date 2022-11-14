const LottoController = require("./domain/LottoController");

class App {
  play() {
    const lottoController = new LottoController();
    lottoController.start();
  }
}

module.exports = App;
