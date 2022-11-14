const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.purchase;
  }

  play() {
    this.purchase = this.input('구입금액을 입력해 주세요.\n');
    if (this.purchase === undefined)
      return 0;
  }

  input(text) {
    let result;
    MissionUtils.Console.readLine(text, (answer) => {
      result = answer;
    });
    return result;
  }
}

const app = new App();
app.play();

module.exports = App;
