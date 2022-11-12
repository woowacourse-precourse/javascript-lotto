const MissionUtils = require("@woowacourse/mission-utils");
const LottoModel = require("../model/LottoModel");
const MESSAGE = require("../assets/Message");

class LottoView {
  lottoController;

  constructor(lottoController) {
    this.lottoController = lottoController;
  }

  printAmount(amount) {
    MissionUtils.Console.print(amount + MESSAGE.BUY_AMOUNT);
  }

  printAllLottery(lottos) {
    lottos.forEach((lotto) => MissionUtils.Console.print(lotto.numbers));
  }
}

module.exports = LottoView;
