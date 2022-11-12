const LottoGameHandler = require("../src/controller/controller");

class App {
  play() {
    const game = new LottoGameHandler();
    game.gameStart();
  }
}

const Appli = new App();
Appli.play();
module.exports = App;
