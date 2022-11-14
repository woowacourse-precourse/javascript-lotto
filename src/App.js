const { Console } = require("@woowacourse/mission-utils");
const LottoList = require("./LottoList");
class App {
  constructor() {
    this.lottos = new LottoList();
  }
  play() {
    this.requestMoney();
  }
  requestMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.lottos.setLottoCount(money);

      this.lottos.printLottoCount();
      this.lottos.printLottoList();
      this.setWinningNumbers();
      this.requestBonus();
    });
  }
  setWinningNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winningNumbers) => {
      this.lottos.setWinningNumbers(winningNumbers);
    });
  }
  requestBonus() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      this.lottos.setBonusNumber(bonusNumber);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
