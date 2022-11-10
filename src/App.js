const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {}
  play() {
    this.getInput("구입금액을 입력해 주세요.\n", this.getSeedMoney);
  }

  getInput = (message, inputFunction) => {
    Console.readLine(message, inputFunction);
  };

  getSeedMoney = (input) => {
    const seedMoney = input / 1000;
  };
}

const app = new App();
app.play();

module.exports = App;
