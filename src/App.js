const { MissionUtils } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Message = require("./Message");

class App {
  checkMoney(money) {
    if (isNaN(money)) {
      throw new Error(Message.INPUT_ERROR);
    }
    if (money % 1000 != 0) {
      throw new Error(Message.UNIT_ERROR);
    }
  }

  purchaseLotto() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.checkMoney(money);
      this.count = Math.floor(money / 1000);
      MissionUtils.Console.print(`${this.count}개를 구매했습니다.`);
    });
  }


  play() {
    this.purchaseLotto();
  }
}

module.exports = App;
