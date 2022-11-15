const LottoBuyer = require("./LottoBuyer.js");
const MissionUtils = require("@woowacourse/mission-utils");
const HitLottoChecker = require("./HitLottoChecker.js");
class App {
  lottoBuyer;
  hitLottoChecker;

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.lottoBuyer = new LottoBuyer(money);
      this.lottoBuyer.buyLotto();
      this.hitLottoChecker = new HitLottoChecker(
        money,
        this.lottoBuyer.getLottoArray()
      );
    });
  }
}

module.exports = App;
