const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const Issuer = require("./Issuer");
const Drawer = require("./Drawer");

class User {
  money;
  lottos;
  issuer = new Issuer();
  drawer = new Drawer();

  buy() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.money = money;
      this.lottos = this.issuer.issue(money);
      this.drawer.draw(this.lottos, this.money);
    });
  }
}

module.exports = User;
