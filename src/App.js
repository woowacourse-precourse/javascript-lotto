const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
  }
}

const app = new App();
app.play();
module.exports = App;
