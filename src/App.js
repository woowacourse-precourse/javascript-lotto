const LottoGame = require("./controller/LottoGame");
class App {
  play() {
    new LottoGame().play();
  }
}

module.exports = App;
