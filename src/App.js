const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js")
const Messages = require("./Messages.js")

class App {
  constructor() {
    this.Lotto() = new Lotto()
  }
  play() {
    MissionUtils.Console.readLine(Messages.INPUT_MONEY, (money) => {
      console.log(money)
    });
  }
}

const app = new App();
app.play();

module.exports = App;