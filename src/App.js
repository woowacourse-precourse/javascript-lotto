const LottoGameController = require("./controller/LottoGameController");

class App {
  play() {
    new LottoGameController().start();
  }
}

module.exports = App;
