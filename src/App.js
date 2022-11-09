const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    inputMoney();
  }
}

function inputMoney() {
  MissionUtils.Console.readLine(`구입금액을 입력해 주세요.\n`, (answer) => {
    MissionUtils.Console.print(answer);
  });
}

const app = new App();
app.play();

module.exports = App;
