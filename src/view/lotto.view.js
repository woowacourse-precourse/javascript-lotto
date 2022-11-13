const MissionUtils = require("@woowacourse/mission-utils");

class LottoView {
  getPayInput() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      MissionUtils.Console.print(input);
    });
  }
}

module.exports = LottoView;
