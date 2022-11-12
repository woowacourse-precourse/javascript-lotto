const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const Buyer = require("../src/Buyer");

class App {
  #Buyer;

  play() {
    this.enterAmount();
  }

  enterAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#Buyer = new Buyer(money);
      Console.close();
    });
  }
}

module.exports = App;
