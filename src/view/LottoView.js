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
    lottos.forEach((lotto) =>
      MissionUtils.Console.print(`[${lotto.numbers.join(", ")}]`)
    );
  }

  printResultInfo(prize, buyPrice) {
    this.printLastResult();
    this.printWinResult(prize);
    this.printEarnPerMoney(prize.totalPrize, buyPrice);
  }

  printLastResult() {
    MissionUtils.Console.print(MESSAGE.RESULT.PREFIX);
  }

  printWinResult(prize) {
    const resultText = Utils.translateResultToText(prize);
    MissionUtils.Console.print(resultText);
  }

  printEarnPerMoney(prize, buyPrice) {
    const profit = Utils.mathRound(prize, buyPrice);
    MissionUtils.Console.print(MESSAGE.profit(profit));
  }
}

module.exports = LottoView;
