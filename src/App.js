const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { lottoQuantity } = require("./utils");
const { validateInputMoney } = require("./validator");

class App {
  constructor() {
    this.userLottoNumbers;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      validateInputMoney(money);
      this.userLottoNumbers = lottoQuantity(money);
      this.inputWinningNum();
    });
  }

  inputWinningNum() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (number) => {
      const winningNumbers = number
        .split(",")
        .map((winningNumber) => Number(winningNumber));
      new Lotto(winningNumbers);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
