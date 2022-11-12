const LottoView = require("./LottoView");
const LottoModel = require("./LottoModel");
const Lotto = require("./Lotto");
const lottoView = new LottoView();
const lottoModel = new LottoModel();
// const lotto = new Lotto();

class App {
  play() {
    lottoView.getPurchaseAmount().then((amount) => {
      amount = amount / 1000;
      const lottos = lottoModel.createLottos(amount);
      lottoView.printLottos(amount, lottos);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
