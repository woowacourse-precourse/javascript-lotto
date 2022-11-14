const Game = require("./Game");
const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.game.setGame(input);
      this.game.quantityOfPurchase();
      this.game.printWinningNumberList();
      this.inputLottoNumber();
    });
  }

  inputLottoNumber() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (input) => {});
  }
}

const app = new App();
app.play();

module.exports = App;
