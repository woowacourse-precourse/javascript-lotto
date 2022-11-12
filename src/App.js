const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
class App {
  lottoPurchase = () => {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (purchase) => {
      Validation.purchaseInput(purchase);
      MissionUtils.Console.print(`${purchase / 1000}개를 구매했습니다.`);
    });
  };
  play() {
    this.lottoPurchase();
  }
}

module.exports = App;
