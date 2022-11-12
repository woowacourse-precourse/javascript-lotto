const Lotto = require("./Lotto");
const LottoView = require("./LottoView");
const lottoView = new LottoView();

class App {
  play() {
    lottoView.inputPurchaseAmount();
  }
}

const app = new App();
app.play();

module.exports = App;
