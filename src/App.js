const { Console, Random } = require("@woowacourse/mission-utils");
const Seed = require("../src/Seed");
const LottoGenerator = require("../src/LottoGenerator");
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
    this.Lottoticket = new LottoGenerator(this.seed.ticketAmount);
  };
}

const app = new App();
app.play();

module.exports = App;
