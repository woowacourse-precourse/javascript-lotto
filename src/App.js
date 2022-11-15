const LottoGame = require("./Controller/LottoGame");
const lottoGame = new LottoGame();

class App {
  play() {
    lottoGame.gameStart();
  }
}
module.exports = App;
