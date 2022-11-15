const { Console } = require("@woowacourse/mission-utils");
const LottoList = require("./LottoList");
const WinningNumbers = require("./WinningNumbers");
const BonusNumber = require("./BonusNumber");

class App {
  constructor() {
    this.lottos = null;
    this.winningNumbers = null;
    this.bonusNumber = null;
  }
  play() {
    this.requestMoney();
  }
  requestMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.lottos = new LottoList(money);

      this.lottos.printCount();
      this.lottos.printList();
      this.setWinningNumbers();
    });
  }
  setWinningNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winningNumbers) => {
      winningNumbers = winningNumbers.split(",").map((item) => Number(item));

      this.winningNumbers = new WinningNumbers(winningNumbers);

      this.setBonusNumber();
    });
  }
  setBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      bonusNumber = Number(bonusNumber);

      this.bonusNumber = new BonusNumber(
        bonusNumber,
        this.winningNumbers.value
      );

      this.printWinningStat();
    });
  }
  printWinningStat() {
    Console.print("\n당첨 통계\n---");

    const lottoResultList = this.lottos.getResult(
      this.winningNumbers.value,
      this.bonusNumber.value
    );
    this.lottos.printWinningList(lottoResultList);
    this.lottos.printLottoRate(lottoResultList);

    this.end();
  }
  end() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
