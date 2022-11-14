const LottoGame = require("./LottoGame.js");

class App {
  play() {
    LottoGame.play();
  }
}

const app = new App();
app.play();

module.exports = App;
