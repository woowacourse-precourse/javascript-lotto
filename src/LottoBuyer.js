const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
class LottoBuyer {
  money;
  constructor(money) {
    money = parseInt(money);
    this.money = money;
  }
}
module.exports = LottoBuyer;
