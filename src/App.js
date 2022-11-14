const Lotto = require("./Lotto");
const BuyLotto = require("./BuyLotto");
const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    // this.lotto = new Lotto();
    this.buyLotto = new BuyLotto();
  }
  play() {
    // this.lotto.start();
    this.buyLotto.start();
  }
}

const app = new App();
app.play();

module.exports = App;
