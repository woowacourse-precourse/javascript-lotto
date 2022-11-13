const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("../assets/Message");
const Utils = require("../assets/Utils");

class LottoView {
  lottoController;

  constructor(lottoController) {
    this.lottoController = lottoController;
  }

  printStartInfo(amount, lottos) {
    this.printAmount(amount);
    this.printAllLottery(lottos);
  }

  printAmount(amount) {
    MissionUtils.Console.print(amount + MESSAGE.BUY_AMOUNT);
  }

  printAllLottery(lottos) {
    lottos.forEach((lotto) => MissionUtils.Console.print(lotto.numbers));
  }

  printLastResult() {
    MissionUtils.Console.print(MESSAGE.RESULT.PREFIX);
  }

  printWinResult(prize) {
    const resultText = Utils.translateResultToText(prize);
    MissionUtils.Console.print(resultText);
  }
}

module.exports = LottoView;
