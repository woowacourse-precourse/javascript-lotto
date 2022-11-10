const LottoGameHandler = require("./controller");

class App {
  play() {
    LottoGameHandler.gameStart();
  }
}

const Appli = new App();
Appli.play();
module.exports = App;
