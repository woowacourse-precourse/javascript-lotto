const LottoGameHandler = require("./controller");

class App {
  play() {
    const game = new LottoGameHandler();
    game.gameStart();
  }
}

const Appli = new App();
Appli.play();
module.exports = App;
