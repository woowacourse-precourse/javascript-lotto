const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  constructor() {
    this.purchase = 0;
    this.lotto = [];
  }
  play() {
    this.getUserInput();
  }
  getUserInput() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.purchase = input;
      this.lotto = Lotto.purchase(input);
      MissionUtils.Console.print(`${this.lotto.length}개를 구매했습니다.`);
      this.printLottos();
    });
  }
  printLottos() {
    this.lotto.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.numbers.join(", ")}]`);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
