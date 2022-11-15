const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./utils/UI");
const User = require("./User");
const Lotto = require("./Lotto");

let user, lotto;

class App {
  play() {
    Console.readLine(MESSAGE.INPUT_AMOUNT, (input) => {
      user = new User(input);
      user.printLottos();
      this.inputWinningNumber();
    });
  }
  inputWinningNumber() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBERS, (input) => {
      lotto = new Lotto(input.split(","), user.getLottos());
    });
  }
}

const app = new App();
app.play();

module.exports = App;
