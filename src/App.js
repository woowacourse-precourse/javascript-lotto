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

  purchaseLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    this.lotto = new Lotto(numbers);
  }
}

a = new App();
module.exports = App;
