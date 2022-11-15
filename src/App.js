const { Console } = require("@woowacourse/mission-utils");
const LottoList = require("./LottoList");
const WinningNumbers = require("./WinningNumbers");
const BonusNumber = require("./BonusNumber");
const { MESSAGE } = require("./errors/message");

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
    Console.readLine(MESSAGE.REQUEST_MONEY, (money) => {
      this.lottos = new LottoList(money);

      this.lottos.printCount();
      this.lottos.printList();
      this.setWinningNumbers();
    });
  }
  setWinningNumbers() {
    Console.readLine(MESSAGE.REQUEST_WINNING_NUMBERS, (winningNumbers) => {
      winningNumbers = winningNumbers.split(",").map((item) => Number(item));

      this.winningNumbers = new WinningNumbers(winningNumbers);

      this.setBonusNumber();
    });
  }
  setBonusNumber() {
    Console.readLine(MESSAGE.REQUEST_BONUS_NUMBER, (bonusNumber) => {
      bonusNumber = Number(bonusNumber);

      this.bonusNumber = new BonusNumber(
        bonusNumber,
        this.winningNumbers.value
      );

      this.printWinningStat();
    });
  }
  printWinningStat() {
    Console.print(MESSAGE.WINNING_STATS);

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
