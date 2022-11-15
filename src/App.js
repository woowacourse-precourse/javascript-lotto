const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.purchase = 0;
  }
  play() {
    this.getUserInput();
  }
  getUserInput() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.purchase = input;
      
    });
  }
}

const app = new App();
app.play();

module.exports = App;
