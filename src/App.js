const LottoGame = require("./LottoGame");

class App {
  play() {
    const lottoGame = new LottoGame(); //입력값을 여기서
    lottoGame.getUserMoney();
  }
}

module.exports = App;
