const BuyLotto = require("./BuyLotto");

class App {
  constructor() {
    this.buyLotto = new BuyLotto();
  }
  play() {
    this.buyLotto.start();
  }
}

const app = new App();
app.play();

module.exports = App;
