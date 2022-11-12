const MissionUtils = require("@woowacourse/mission-utils");

class LottoView {
  inputPurchaseAmount() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      console.log(answer);
      MissionUtils.Console.close();
    });
  }
}

module.exports = LottoView;
