const MissionUtils = require("@woowacourse/mission-utils");
const Money = require("./Money");

class App {
  play() {}
  constructor() {
    this.money = 0;
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      new Money(money);
      MissionUtils.Console.print(money);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
