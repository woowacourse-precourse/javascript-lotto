const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  validateMoney(money) {
    const UNIT = 1000;
    const remains = money % UNIT;
    if (remains !== 0) {
      throw new Error(`[ERROR] 1000원 단위로 금액을 입력해주세요.`);
    }
  }
  buyLottos() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      this.validateMoney(money);
    });
  }
  play() {}
}

module.exports = App;
