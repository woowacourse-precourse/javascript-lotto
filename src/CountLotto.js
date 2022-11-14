const App = require("./App");
const { Console } = require("@woowacourse/mission-utils");

class CountLotto {
  constructor() {
    this.lottoCount = null;
  }
  setLottoCount(money) {
    this.validateMoney(money);
    this.lottoCount = money / 1000;
  }
  throwError(money) {
    if (money < 1000) {
      throw new Error("[Error] 최소 구입 금액은 1000원입니다.");
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 로또를 구입해야 합니다.");
    }
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
  }

  printLotteCount() {
    Console.print(`\n${this.lottoCount}개를 구매했습니다.`);
  }
}

module.exports = CountLotto;
