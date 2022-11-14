const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");

const { getLottoNumber, makeLottoArray } = require("./LottoGenerator");
// const {
//   makeWinLottoNumber,
//   changePriceToCount,
//   test,
// } = require("./UiInputLogic");

const UiInputLogic = require("./UiInputLogic");
const Lotto = require("./Lotto");

class App {
  constructor() {
    // this.lottoGame = new Lotto(this.lottoArray);
    this.uiInputLogic = new UiInputLogic();
  }

  play() {}
}

const app = new App();
app.play();

module.exports = App;
