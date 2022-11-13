const MissionUtils = require("@woowacourse/mission-utils");
const Model = require("../model/lotto.model");

class LottoView {
  constructor() {
    this.model = new Model();
  }

  amountBuyLotto(input) {
    let countLotto = this.model.countLotto(input);

    this.model.getLottoNumPrint(countLotto);
  }
}

module.exports = LottoView;
