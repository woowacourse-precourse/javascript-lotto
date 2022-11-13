const MissionUtils = require("@woowacourse/mission-utils");
const Model = require("../model/lotto.model");

class LottoView {
  constructor() {
    this.model = new Model();
  }

  getPayInput() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      MissionUtils.Console.print(this.model.inputValidCheck(input));
    });
  }
}

module.exports = LottoView;
