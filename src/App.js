const LottoGame = require("./LottoGame");
const UserLottos = require("./UserLottos");

class App {
  play() {
    const lottos = new UserLottos();
    const lottoGame = new LottoGame(lottos);

    lottoGame.game();
  }
}

const app = new App();
app.play();

module.exports = App;
