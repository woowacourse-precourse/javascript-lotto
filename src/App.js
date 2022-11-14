const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  myLotto;
  lotto;

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      Console.print("");
      Lotto.validateMoney(answer);
      const boughtLotto = Lotto.buy(answer);

      this.myLotto = boughtLotto;
      Lotto.alertPurchaseResult(boughtLotto);

      this.generateWinningNumbers();
    });
  }

  generateWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (winingNumber) => {
      Console.print("");

      this.lotto = new Lotto(
        winingNumber.split(",").map((numberOfString) => Number(numberOfString))
      );
      Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
        Console.print("");

        this.lotto.validateBonusNumber(Number(bonusNumber));
        this.confirmWinning(bonusNumber);
      });
    });
  }

  confirmWinning(bonusNumber) {
    const statistics = this.lotto.getWinStatistics(this.myLotto, bonusNumber);
    const messages = this.lotto.getMessageFromStatistics(
      statistics,
      this.myLotto.length
    );

    this.alertResultAndExit(messages);
  }

  alertResultAndExit(messages) {
    messages.forEach((message) => {
      Console.print(message);
    });
    Console.close();
  }
}

module.exports = App;
