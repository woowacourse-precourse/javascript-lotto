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

      if (money % 1000 !== 0) {
        throw new Error("[ERROR] 1000원 단위로 입력해야 합니다.");
      }

      Console.print(this.issuer.issue(money));
    });
  }
}

module.exports = User;
