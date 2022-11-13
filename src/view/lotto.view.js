const MissionUtils = require("@woowacourse/mission-utils");
const Model = require("../model/lotto.model");

class LottoView {
  constructor() {
    this.model = new Model();
  }

  amountBuyLotto(input) {
    let countLotto = this.model.countLotto(input);
    MissionUtils.Console.print(`${countLotto}개를 구매했습니다`);
  }
}

module.exports = LottoView;
