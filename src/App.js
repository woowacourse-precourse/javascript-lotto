const { Console } = require("@woowacourse/mission-utils");

const User = require("./User");
const Lotto = require("./Lotto");

let user, lotto;

class App {
  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      user = new User(input);
      user.printLottos();
      this.inputWinningNumber();
    });
  }
  inputWinningNumber() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (input) => {
      lotto = new Lotto(input.split(","), user.getLottos());
    });
  }
}

const app = new App();
app.play();

module.exports = App;
