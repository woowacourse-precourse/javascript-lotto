const { Console } = require("@woowacourse/mission-utils");
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
    });
  }
}

const app = new App();
app.play();

module.exports = App;
