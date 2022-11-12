const LottoView = require("./LottoView");
const LottoModel = require("./LottoModel");
const Lotto = require("./Lotto");
const lottoView = new LottoView();
const lottoModel = new LottoModel();

class App {
  play() {
    lottoView.getPurchaseAmount().then((amount) => {
      amount = amount / 1000;
      const lottos = lottoModel.createLottos(amount);
      lottoView.printLottos(amount, lottos);
      lottoView.getLottoNumbers().then((numbers) => {
        console.log(numbers);
        const lotto = new Lotto(numbers);
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
