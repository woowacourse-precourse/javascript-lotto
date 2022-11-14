const LottoGameHandler = require("../src/controller/controller");

class App {
  play() {
    const gameLauncher = new LottoGameHandler();
    gameLauncher.gameStart();
  }
}

module.exports = App;
