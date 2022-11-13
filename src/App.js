const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/index");

class App {
  constructor() {
    this.lotto;
  }

  play() {
    Console.print(MESSAGE.MONEY_INPUT);
  }
}

const app = new App();
app.play();

module.exports = App;
