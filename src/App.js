const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  play() {
    this.lottoAmount();
    return 0;
  }

  lottoAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (inputMoney) => {
      if (inputMoney % 1000 != 0) throw "[ERROR] 올바르지 않은 입력입니다.";
      let amount = inputMoney / 1000;
      Console.print(amount + "개를 구매했습니다.");
      let myNumbers = this.autoLottoNums(amount);
      this.inputWinningNums(myNumbers);
    });
    return;
  }
}

module.exports = App;
