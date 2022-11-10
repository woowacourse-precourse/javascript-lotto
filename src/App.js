const BuyLotto = require("./BuyLotto");

class App {
  play() {
    const buy = new BuyLotto();
    buy.inputAmount();
  }
}

module.exports = App;
