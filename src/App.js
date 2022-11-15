const Game = require("./Game");
const { Console } = require("@woowacourse/mission-utils");
const WinningNumbers = require("./Generator");
const BonusNumber = require("./Generator");

class App {
  constructor() {
    this.game = new Game();
    this.winningNumbers = null;
    this.bonusNumber = null;
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.game.setGame(input);
      this.game.quantityOfPurchase();
      this.game.printWinningNumberList();
      this.inputWinningNumber();
    });
  }

  inputWinningNumber() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (input) => {
      input = input.split(",").map((el) => Number(el));
      this.winningNumbers = new WinningNumbers(input);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (input) => {
      this.bonusNumber = new BonusNumber(
        Number(input),
        this.WinningNumbers.value
      );
      this.printResult();
    });
  }

  printResult() {
    Console.print("\n당첨 통계\n---");
    this.game.printWinningHistory();
    this.game.getResultRate();
    this.close();
  }

  close() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
