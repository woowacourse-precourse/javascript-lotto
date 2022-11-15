const { Console } = require("@woowacourse/mission-utils");
const { getRandomNum } = require("./utils");
const { validateInputMoney } = require("./validator");

class App {
  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      validateInputMoney(money);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
