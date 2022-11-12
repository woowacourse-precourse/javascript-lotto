const Lotto = require("./Lotto.js");
class App {
  play() {
    Lotto.LottoGame();
  }
}

const a = new App();
a.play();

module.exports = App;
