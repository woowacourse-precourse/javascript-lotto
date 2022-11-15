const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  constructor() {
    this.purchase = 0;
    this.lotto = [];
    this.matchingNumbers = [];
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
      this.getBonusNumber();
    });
  }
  getBonusNumber() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (input) => {
      Lotto.prototype.bonusNumber = input;
      this.lotto.forEach((lotto) => {
        let count = Lotto.getMatchingNumber(lotto);
        this.matchingNumbers.push(count);
      });
      this.printEarningStasticsMessage();
      this.printEarningRate();
      MissionUtils.Console.close();
    });
  }
  printEarningStasticsMessage() {
    MissionUtils.Console.print("당첨 통계\n---");
  }
  printEarningRate() {
    const totalEarning = Lotto.getStastics(this.matchingNumbers) || 1;
    MissionUtils.Console.print(
      `총 수익률은 ${Lotto.getEarningRate(this.purchase, totalEarning)}%입니다.`
    );
  }
}

const app = new App();
app.play();

module.exports = App;
