const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    const lotto = new Lotto();
    lotto.getUserNumber();
  }
}

module.exports = App;

const app = new App();
app.play();