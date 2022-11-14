const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    try {
      this.getMoney();
    } catch (e) {
      console.log(e);
    }
  }
}

tmp = new App();
tmp.play();

// module.exports = App;
