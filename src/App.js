const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

const VendingMachine = require("./lotto/domain/VendingMachine");

class App {
  constructor() {
    this.vendingMachine = new VendingMachine();
  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.vendingMachine.setMoney(money);

      return;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
