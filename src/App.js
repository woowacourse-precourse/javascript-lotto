const Lotto = require("./Lotto");
const LottoView = require("./LottoView");
const lottoView = new LottoView();

class App {
  play() {
    let purchaseAmount;
    lottoView.getPurchaseAmount().then((amount) => {
      purchaseAmount = amount / 1000;
      console.log(purchaseAmount);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
