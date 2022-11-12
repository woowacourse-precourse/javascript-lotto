const LottoGame = require("./LottoGame.js");
class App {
  play() {
    new LottoGame().buyLotto();
  }
}

const a = new App();
a.play();

module.exports = App;
