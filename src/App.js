const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { LOTTO_MESSAGE } = require("./constant.js");

class App {
  lottoNumArr;

  play() {
    this.buyLotto();
  }

  buyLotto() {
    MissionUtils.Console.readLine(LOTTO_MESSAGE.INPUT_MONEY_MSG, (money) => {
      Lotto.checkMoney(money);
      this.lottoNumArr = Lotto.genLottoNumArr(money);
      Lotto.printLottoNumArr(this.lottoNumArr);
    });
  }
}

module.exports = App;
