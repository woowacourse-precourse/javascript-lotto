const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");

class App {
  play() {
    const buy = new BuyLotto();
    buy.printRandomLotto(buy.inputAmount());
    buy.printNumberOfLotto(buy.createRandomLotto(buy.inputAmount()));
  }
}

module.exports = App;
