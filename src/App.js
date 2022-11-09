const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    this.inputAmountOfMoneyToBuy();
  }

  inputAmountOfMoneyToBuy() {
    const WORD_TO_PRINT = "구입금액을 입력해 주세요.\n";

    MissionUtils.Console.readLine(WORD_TO_PRINT, (money) => {
      money = Number(money);
    });
  }
}

module.exports = App;
