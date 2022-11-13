const MissionUtils = require("@woowacourse/mission-utils");
const Model = require("../model/lotto.model");

class LottoView {
  constructor() {
    this.model = new Model();
  }

  getPayInput() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      MissionUtils.Console.print(this.model.inputValidCheck(input));
      this.amountBuyLotto(input);
    });
  }

  amountBuyLotto(input) {
    let countLotto = input / 1000;
    MissionUtils.Console.print(`${countLotto}개를 구매했습니다`);
  }
}

module.exports = LottoView;
