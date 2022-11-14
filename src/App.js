import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  checkMoney(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
    if (money % 1000 != 0) {
      throw new Error("[ERROR] 금액 단위는 1,000원 입니다.");
    }
  }

  purchaseLotto() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.checkMoney(money);
    });
  }


  play() {
    this.purchaseLotto();
  }
}

module.exports = App;
