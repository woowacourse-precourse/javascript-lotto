const Lottery = require("./Lottery");
const Lotto = require("./Lotto");
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    const lottery = new Lottery();
    lottery.inputPurchaseAmount();
  }
}

const app = new App();
app.play();

module.exports = App;
