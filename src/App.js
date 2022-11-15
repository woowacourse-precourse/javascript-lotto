const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const lotto = new Lotto();

class App {
  play() {
    lotto.inputAmount();
  }
}

const app = new App();
console.log(app.play());

module.exports = App;
