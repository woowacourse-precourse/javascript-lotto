const { Console, Random } = require("@woowacourse/mission-utils");
const Seed = require("../src/Seed");
const LottoGenerator = require("../src/LottoGenerator");
const Lotto = require("../src/Lotto");

class App {
  seed;
  lottoTicket;
  winning;
  constructor() {}
  play() {
    this.getInput("구입금액을 입력해 주세요.\n", this.getSeedMoney);
  }

  getInput = (message, inputFunction) => {
    Console.readLine(message, inputFunction);
  };

  getSeedMoney = (input) => {
    this.seed = new Seed(Number(input));
    this.lottoTicket = new LottoGenerator(this.seed.ticketAmount);
    this.getInput("\n당첨 번호를 입력해 주세요.\n", this.getWinnerNumber);
  };

  getWinnerNumber = (input) => {
    const splitByComma = input.split(",");
    this.winning = new Lotto(splitByComma);
    this.getInput("\n보너스 번호를 입력해 주세요.\n", this.getBonusNumber);
  };

  getBonusNumber = (input) => {
    Console.print(input);
  };
}

const app = new App();
app.play();

module.exports = App;
