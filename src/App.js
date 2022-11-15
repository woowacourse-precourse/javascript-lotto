const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const Text = require("./Text");

class App {
  constructor() {}

  play() {
    this.userPurchase();
  }

  userPurchase() {
    MissionUtils.Console.readline(
      `${Text.INPUT_TEXT.PRICE}\n`,
      (purchasePrice) => {}
    );
  }
}

const app = new App();
app.play();

module.exports = App;
