const LottoGame = require("./LottoGame.js");
class App {
  play() {
    new LottoGame().buyLotto();
  }
}

module.exports = App;
