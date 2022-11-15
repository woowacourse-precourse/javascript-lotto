const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 구입금액을 입력받음
  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      return this.getLottoNumber(answer);
    });
  }

  play() {
    this.getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
