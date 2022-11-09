const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./data/constants");
const Lotto = require("./Lotto");
const User = require("./components/User");

class App {
  inputMoney() {
    Console.readLine(MESSAGE.MONEY_INPUT + "\n", (inputMoney) => {
      this.user = new User(inputMoney);
      Console.print(
        "\n" + this.user.countAvailableLotto() + MESSAGE.ALERT_PURCHASE
      );
      this.user.lottoPurchase();
      this.user.printMyLottos();
    });
  }

  play() {
    this.inputMoney();
  }
}

module.exports = App;
