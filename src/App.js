const { Console } = require("@woowacourse/mission-utils");
const UserLotto = require("./UserLotto");
const Computer = require("./Computer");
const View = require("./View");
const { ENTER_MESSAGE } = require("./utils/constants");

class App {
  userLotto;
  computer;
  profitRate;

  play() {
    Console.readLine(ENTER_MESSAGE.PURCHASE_AMOUT, (purchaseAmout) => {
      this.userLotto = new UserLotto(purchaseAmout);

      View.lottoCount(this.userLotto.count);
      View.lottoNumbers(this.userLotto.totalNumbers);

      this.getWinningNumbers();
    });
  }

  getWinningNumbers() {
    Console.readLine(ENTER_MESSAGE.WINNING_NUMBERS, (winningNumbers) => {
      this.computer = new Computer(winningNumbers);

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(ENTER_MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      this.computer.setBonusNumber(bonusNumber);
      this.computer.getMatchs(this.userLotto.totalNumbers);

      View.winningStatistics(this.computer.winningRanking);
      View.profitRate(
        this.userLotto.purchaseAmout,
        this.computer.getTotalRevenue()
      );

      Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
