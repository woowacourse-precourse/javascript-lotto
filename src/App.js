const MissionUtils = require("@woowacourse/mission-utils");
class App {
  money;
  play() {
    this.inputBuyLottoMoney();
  }

  inputBuyLottoMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.money = parseInt(money);
    });
  }

}

module.exports = App;
