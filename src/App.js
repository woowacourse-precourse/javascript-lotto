const LottoBuy = require("./LottoBuy");
const LottoSetting = require("./LottoSetting");
const MissionUtils = require("@woowacourse/mission-utils");
const { INPUT } = require("./lib/library");
const LottoCalculate = require("./LottoCalculator");

class App {
  async play() {
    const myLotto = new LottoBuy();
    const lottoSetting = new LottoSetting();
    const caculator = new LottoCalculate();
    MissionUtils.Console.readLine(INPUT.BUY, (price) => {
      myLotto.inputPurchasePrice(price);
      lottoSetting.inputWinLottoNum();
      const result = caculator.resultCaculator(
        myLotto.getMyLottos(),
        lottoSetting.getWinInfo()
      );
      caculator.printWinResult(result);
      caculator.printGainPercent(result);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
