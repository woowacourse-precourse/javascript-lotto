const { Console, Random } = require("@woowacourse/mission-utils");
const Seed = require("../src/Seed");
class App {
  seed;
  constructor() {}
  play() {
    this.getInput("구입금액을 입력해 주세요.\n", this.getSeedMoney);
  }

  getInput = (message, inputFunction) => {
    Console.readLine(message, inputFunction);
  };

  getSeedMoney = (input) => {
    this.seed = new Seed(Number(input));
    console.log(this.seed);
  };
}

const app = new App();
app.play();

module.exports = App;
