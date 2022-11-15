const Game = require("./Game");
const WinningNumbers = require("./InputWinningNumbers");
const BonusNumber = require("./InputWinningNumbers");
const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.game;
    this.winningNumbers;
    this.bonusNumber;
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.game = new Game(input);
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
      input = Number(input);
      this.bonusNumber = new BonusNumber(input, this.winningNumbers.value);
      this.printResult();
    });
  }

  printResult() {
    Console.print("\n당첨 통계\n---");
    const result = this.game.getLottoResult(
      this.winningNumbers.value,
      this.bonusNumber.value
    );
    this.game.printWinningHistory(result);
    this.game.getResultRate(result);
    this.close();
  }

  close() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
