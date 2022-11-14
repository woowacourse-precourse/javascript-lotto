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
  }

  createLottoNumber(input) {
    let countLotto = this.model.countLotto(input);

    this.model.getLottoNumPrint(countLotto);
  }

  numberPrint(input) {
    MissionUtils.Console.print(this.model.lottoNumberError(input));
  }

  bonusNumberPrint(input) {
    MissionUtils.Console.print(this.model.lottoBonusNumberError(input));
  }

  successStartContext() {
    MissionUtils.Console.print(`당첨 통계\n---`);
  }

  successContext() {
    this.model.resultMessage();
  }
}

module.exports = LottoView;
