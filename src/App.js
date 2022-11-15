const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("./lib/library");
const LottoBuy = require("./LottoBuy");
const LottoCalculate = require("./LottoCalculator");
const LottoSetting = require("./LottoSetting");

class App {
  #lottos;

  play() {
    this.lottoBuyPrint();
  }

  lottoBuyPrint() {
    const lottobuy = new LottoBuy();
    Console.readLine(INPUT.BUY, (price) => {
      lottobuy.inputPurchasePrice(price);
      this.#lottos = lottobuy.getMyLottos();
      this.lottoWinSetting();
    });
  }

  lottoWinSetting() {
    const lottoSetting = new LottoSetting();
    Console.readLine(INPUT.WIN_NUMBER, (number) => {
      lottoSetting.inputWinLottoNum(number);
      Console.readLine(INPUT.BONUS, (bonus) => {
        lottoSetting.inputBonusNum(bonus);
        this.lottoResultCalculator(lottoSetting.getWinInfo());
      });
    });
  }

  lottoResultCalculator(winSetting) {
    const calculator = new LottoCalculate();
    const result = calculator.resultCaculator(this.#lottos, winSetting);
    calculator.printWinResult(result).printGainPercent(result);
    Console.close();
  }
}

module.exports = App;
