const { Console } = require("@woowacourse/mission-utils");
const LottoList = require("./LottoList");
const BonusNumber = require("./BonusNumber");
class App {
  constructor() {
    this.lottos = new LottoList();
    this.winningNumbers = null;
    this.bonusNumber = null;
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
      this.bonusNumber = new BonusNumber(
        Number(bonusNumber),
        this.winningNumbers.value
      );
      this.printWinningStat();
    });
  }
  printWinningStat() {
    Console.print("\n당첨 통계\n---");
    this.lottos.printWinningList();
    this.lottos.printLottoRate();
  }
}

const app = new App();
app.play();

module.exports = App;
