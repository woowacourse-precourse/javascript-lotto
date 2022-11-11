const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

class App {
  message = {
    START_MESSAGE: "구입금액을 입력해 주세요.",
    WINNING_MESSAGE: "당첨 번호를 입력해 주세요.",
    BONUS_MESSAGE: "보너스 번호를 입력해 주세요.",
  };

  constructor() {}

  play() {
    this.printMessage(this.message.START_MESSAGE);
  }

  printMessage(message) {
    Console.print(message);
  }
}
const app = new App();
app.play();

module.exports = App;
