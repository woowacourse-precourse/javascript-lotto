const MissionUtils = require("@woowacourse/mission-utils");
const MyLotto = require("./MyLotto");
class App {
  money;
  myLotto;
  play() {
    this.inputBuyLottoMoney();
  }

  inputBuyLottoMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.validateIsNumber(money);

      this.money = parseInt(money);
      this.myLotto = new MyLotto(this.money);

    });
  }


  validateIsNumber(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
  }
}

module.exports = App;
