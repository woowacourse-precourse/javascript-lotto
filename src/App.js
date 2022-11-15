const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js")
const Messages = require("./Messages.js")
const Errors = require("./Error.js")

class App {
  constructor() {
    this.Lotto() = new Lotto()
  }
  play() {
    MissionUtils.Console.readLine(Messages.INPUT_MONEY, (money) => {
      this.inputNumber()
    });
  }

  inputIsValid(money) {
    if (money % 1000 != 0) {
      throw Errors.UNIT_ERROR;
    }
  }
  inputNumber() {
    MissionUtils.Console.readLine(Messages.INPUT_NUMBER, (numbers) => {

    })
  }
}

const app = new App();
app.play();

module.exports = App;