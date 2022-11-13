const LottoGame = require("./LottoGame");

class App {
  constructor() {
    this.lottogame = new LottoGame();
  }

  play() {
    this.lottogame.getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
