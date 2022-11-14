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
}

a = new App();
module.exports = App;
