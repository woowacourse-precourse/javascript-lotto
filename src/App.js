const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./user");

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.chargePurchaseMoney();
  }

  chargePurchaseMoney() {
    Console.readLine("구입금액을 입력하세요 : ", (answer) => {
      this.user.changeMoney(answer);
      Console.print(answer);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
