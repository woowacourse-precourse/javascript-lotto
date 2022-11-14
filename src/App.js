const MissionUtils = require("@woowacourse/mission-utils");
const messages = require("./constants/messages.js");
const terms = require("./constants/terms");
const Lotto = require("./Lotto.js");

class App {
  constructor() {}
  play() {}

  checkInputUnits(money) {
    if (money % 1000 > 0) {
      return { isPurchaseable: false, error: messages.MONEY_UNIT_ERROR };
    }
    return true;
  }

  purchaseableCount(money) {
    return parseInt(money / terms.PERMISSIBLE_UNITS);
  }

  purchaseLotto(lottoCount) {
    let lottoArray = [];
    for (let i = 0; i < lottoCount; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lotto = new Lotto(numbers);
      lottoArray.push(this.lotto);
    }
    return lottoArray;
  }
  printNumberOfLotto(lottoCount) {
    MissionUtils.Console.print(lottoCount);
  }
}

a = new App();
module.exports = App;
