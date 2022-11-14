const App = require("./App");

class CountLotto {
  constructor() {
    this.lottoCount = null;
  }
  setLottoCount(money) {
    this.validateMoney(money);
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
}

module.exports = CountLotto;
