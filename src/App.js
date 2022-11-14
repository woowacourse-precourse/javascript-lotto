const Lotto = require("./Lotto");
const BuyLotto = require("./BuyLotto");
const { Console, Random } = require("@woowacourse/mission-utils");

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
