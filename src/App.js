const LottoGame = require("./Lotto.js");
class App {
  play() {
    LottoGame();
  }
}

const a = new App();
a.play();

module.exports = App;
