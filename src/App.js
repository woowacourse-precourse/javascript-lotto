const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");

class App {
  play() {
    const buy = new BuyLotto();
    new Lotto(buy.inputLottoNumbers(), buy.inputBonusNumber());

  }
}

module.exports = App;
