const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Issuer = require("./Issuer");
const Console = MissionUtils.Console;

class User {
  money;
  //   lottos = new Lotto();
  issuer = new Issuer();

  buy() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.money = money;

      Console.print(this.issuer.issue(money));
    });
  }
}

module.exports = User;
