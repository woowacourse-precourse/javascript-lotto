const LottoBuy = require("./LottoBuy");
const LottoSetting = require("./LottoSetting");
const MissionUtils = require("@woowacourse/mission-utils");
const { INPUT } = require("./lib/library");

class App {
  async play() {
    // const myLotto = new LottoBuy();
    // const lottoSetting = new LottoSetting();
    // MissionUtils.Console.readLine(INPUT.BUY, (price) => {
    //   myLotto.inputPurchasePrice(price);
    //   lottoSetting.inputWinLottoNum();
    // });
  }
}

const app = new App();
app.play();

module.exports = App;
