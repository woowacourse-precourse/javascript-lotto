const MissionUtils = require("@woowacourse/mission-utils");
const readline = require("readline");

class App {
  constructor() {}

  paymentInput() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요.", (answer) => {
      console.log(`구입금액: ${answer}`);
    });
  }
  play() {
    this.paymentInput();
  }
}
const app = new App();
app.play();
module.exports = App;
