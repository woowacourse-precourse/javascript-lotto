const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./data/constants");
const Lotto = require("./Lotto");
const User = require("./components/User");

class App {
  inputMoney() {
    Console.readLine(MESSAGE.MONEY_INPUT, (inputMoney) => {
      this.user = new User(inputMoney);
      this.user.print();
    });
  }

  play() {}
}

const app = new App();
app.inputMoney();

module.exports = App;
