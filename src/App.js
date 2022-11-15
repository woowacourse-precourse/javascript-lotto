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
      this.getWinNumbers();
    });
  }
  printLottos() {
    this.lotto.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.numbers.join(", ")}]`);
    });
  }
  getWinNumbers() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (input) => {
      if (input.split(",").length !== 6) {
        throw new Error("[ERROR] 당첨 번호는 6개를 입력해주세요.");
      }
      Lotto.prototype.winNumbers = input;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
