const LottoBuyer = require("./LottoBuyer.js");
const MissionUtils = require("@woowacourse/mission-utils");
class App {
  lottoBuyer;

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.lottoBuyer = new LottoBuyer(money);
      this.lottoBuyer.buyLotto();
    });
  }
}

module.exports = App;
