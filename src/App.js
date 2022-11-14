const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./lib/constants");
const User = require("./User");

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.purchase();
  }

  exit() {
    MissionUtils.Console.close();
  }

  purchase() {
    this.user.readAmount(MESSAGE.AMOUNT, (amount) => {
      this.printMessage(amount);
      this.exit();
    });
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }
}

const app = new App();
app.play();

module.exports = App;
