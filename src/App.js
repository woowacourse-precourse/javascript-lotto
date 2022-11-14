const MissionUtils = require("@woowacourse/mission-utils");
const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");
const Winning = require("./Winning");

class App {
  play() {
    const buy = new BuyLotto();
    const lottoNumber = buy.inputLottoNumbers();
    const bonusNumber = buy.inputBonusNumber();
    new Lotto(lottoNumber, bonusNumber); // 유효성 검사
    new Winning();
  }
}

module.exports = App;
