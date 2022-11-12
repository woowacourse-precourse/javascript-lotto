const MissionUtils = require("@woowacourse/mission-utils");
const lotto = require("./Lotto.js");

class App {
  play() {
    lotto.inputPurchaseAmount();
  }
}

let app = new App();
app.play();

module.exports = App;
