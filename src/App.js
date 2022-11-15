const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const lotto = new Lotto();

class App {
  play() {
    lotto.inputAmount();
  }
}

module.exports = App;
