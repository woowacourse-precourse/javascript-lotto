const MissionUtils = require("@woowacourse/mission-utils");
const Model = require("../model/lotto.model");

class LottoView {
  constructor() {
    this.model = new Model();
  }

  amountBuyLotto(input) {
    let countLotto = this.model.countLotto(input);
    let buyText = `${countLotto}개를 구매했습니다.`;

    MissionUtils.Console.print(buyText);
    this.model.getLottoNumPrint(countLotto);
  }
}

module.exports = LottoView;
